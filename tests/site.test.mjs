import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const page = path => readFileSync(`out/${path}index.html`, "utf8")
const projects = JSON.parse(readFileSync("src/data/projects.json", "utf8"))
const links = html =>
  [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(([, attrs, body]) => ({
    ...Object.fromEntries(
      [...attrs.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, name, value]) => [
        name,
        value,
      ]),
    ),
    body,
  }))

for (const path of ["", "projects/"]) {
  test(`${path || "home"}: every work shows a thumbnail, name and summary that open its site`, () => {
    const html = page(path)
    const anchors = links(html)
    assert.doesNotMatch(html, /Built with:|Source code|View site/)
    for (const project of projects) {
      const href = project.url || project.github
      const card = anchors.find(link => link.href === href)
      assert.ok(card, `${project.title}: card link`)
      assert.equal(card.target, "_blank")
      assert.ok(card.rel.includes("noopener"))
      assert.ok(card.body.includes(`alt="${project.title}"`))
      assert.ok(card.body.includes(`<h5>${project.title}</h5>`))
      assert.ok(
        card.body.includes(project.description.replace(/'/g, "&#x27;")) ||
          card.body.includes(project.description),
      )
    }
  })
}

test("old blog posts and the blog link are gone", () => {
  assert.throws(() => page("blog/"))
  assert.throws(() => page("blog/atom-clone/"))
  for (const path of ["", "projects/", "about/", "contact/"]) {
    assert.ok(
      !links(page(path)).some(link => link.href?.startsWith("/blog")),
      path,
    )
  }
})

test("contact spelling and social link names are clear", () => {
  const html = page("contact/")
  assert.match(html, /I(?:&#x27;|&#39;|')ll respond within 2–3 days\./)
  assert.ok(
    links(html).some(
      link =>
        link.href === "https://formspree.io/" && link.body === "Formspree",
    ),
  )
  assert.doesNotMatch(html, /I'll response|Formspress|mailto:/)
  for (const path of ["", "projects/", "contact/"]) {
    const social = links(page(path)).filter(link =>
      ["X (Twitter) profile", "GitHub profile", "LinkedIn profile"].includes(
        link["aria-label"],
      ),
    )
    assert.ok(social.length >= 3)
    for (const link of social) {
      assert.equal(link.title, link["aria-label"])
      assert.match(link.body, /aria-hidden="true"/)
    }
  }
})
