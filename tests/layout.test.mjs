import assert from "node:assert/strict"
import { once } from "node:events"
import { createServer } from "node:http"
import { after, before, test } from "node:test"
import { chromium } from "playwright"
import serveHandler from "next/dist/compiled/serve-handler/index.js"

const server = createServer((req, res) =>
  serveHandler(req, res, { public: "out" }),
)
let browser
let baseUrl

before(async () => {
  browser = await chromium.launch()
  server.listen(0, "127.0.0.1")
  await once(server, "listening")
  baseUrl = `http://127.0.0.1:${server.address().port}`
})

after(async () => {
  try {
    await browser?.close()
  } finally {
    server.closeAllConnections()
    if (server.listening) await new Promise(resolve => server.close(resolve))
  }
})

test("project cards and links fit on phone, tablet and desktop screens", async () => {
  const page = await browser.newPage()
  try {
    for (const path of ["/", "/projects/"]) {
      for (const width of [320, 375, 768, 1024, 1280]) {
        await page.setViewportSize({ width, height: 900 })
        await page.goto(`${baseUrl}${path}`)
        await page.evaluate(() => document.fonts.ready)
        const layout = await page.evaluate(() => {
          const list = document.querySelector(".project-list")
          const bounds = list.getBoundingClientRect()
          return {
            viewport: innerWidth,
            pageWidth: document.documentElement.scrollWidth,
            overflowing: [...list.children].flatMap(card => {
              const box = card.getBoundingClientRect()
              const outsideList =
                box.left < bounds.left - 1 || box.right > bounds.right + 1
              const outsideCard = [...card.querySelectorAll("a")].some(link => {
                const rect = link.getBoundingClientRect()
                return rect.left < box.left - 1 || rect.right > box.right + 1
              })
              return outsideList || outsideCard
                ? [card.querySelector("h5").textContent]
                : []
            }),
          }
        })
        assert.ok(
          layout.pageWidth <= layout.viewport,
          `${path} at ${width}px scrolls horizontally`,
        )
        assert.deepEqual(
          layout.overflowing,
          [],
          `${path} at ${width}px overflows its cards`,
        )
      }
    }
  } finally {
    await page.close()
  }
})

test("blog titles visibly look like links and open the article", async () => {
  const page = await browser.newPage()
  try {
    for (const path of ["/", "/blog/"]) {
      await page.goto(`${baseUrl}${path}`)
      const title = page.locator(".blog-link h5").first()
      assert.ok(
        await title.evaluate(element =>
          getComputedStyle(element).textDecorationLine.includes("underline"),
        ),
      )
      await title.click()
      await page.waitForURL(`${baseUrl}/blog/atom-clone/`)
      assert.equal(
        await page.locator(".blog__title h3").textContent(),
        "What you need to know when you make Atom Site",
      )
    }
  } finally {
    await page.close()
  }
})

test("public pages do not expose development instructions or an email address", async () => {
  const page = await browser.newPage()
  try {
    for (const path of [
      "/",
      "/projects/",
      "/blog/",
      "/blog/atom-clone/",
      "/about/",
      "/contact/",
    ]) {
      await page.goto(`${baseUrl}${path}`)
      const text = await page.locator("body").innerText()
      assert.doesNotMatch(
        text,
        /localhost|127\.0\.0\.1|\b(?:npm|npx|git)\s+(?:run|install|test|diff|status)\b|\b[\w.-]+\.(?:jsx?|tsx?|mdx?|json)\b/i,
        path,
      )
      assert.doesNotMatch(text, /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i, path)
    }
  } finally {
    await page.close()
  }
})
