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
  test(`${path || "home"}: project images and titles open their sites`, () => {
    const html = page(path)
    const anchors = links(html)
    const visible = projects.filter(project => path || project.featured)
    assert.equal((html.match(/Built with:/g) || []).length, visible.length)
    for (const project of visible) {
      const siteLinks = anchors.filter(link => link.href === project.url)
      assert.ok(
        siteLinks.some(link => link.body.includes(`alt="${project.title}"`)),
      )
      assert.ok(siteLinks.some(link => link.body.endsWith(`${project.title}`)))
      for (const [href, label] of [
        [project.url, "View site"],
        [project.github, "Source code"],
      ]) {
        const link = anchors.find(link => link.href === href && link.title)
        assert.ok(link, `${project.title}: ${label}`)
        assert.ok(link.body.includes(label))
        assert.ok(link["aria-label"].includes(label))
        assert.equal(link.target, "_blank")
        assert.ok(link.rel.includes("noopener"))
      }
    }
  })
}

test("blog cards link to the article from home and the blog list", () => {
  for (const path of ["", "blog/"]) {
    const link = links(page(path)).find(
      link => link.href === "/blog/atom-clone/",
    )
    assert.ok(link)
    assert.match(
      link.body,
      /<h5>What you need to know when you make Atom Site<\/h5>/,
    )
    assert.match(link.body, /<img\b/)
  }
})

test("the clone article identifies the demo and ends with a related project", () => {
  const html = page("blog/atom-clone/")
  const anchors = links(html)
  assert.ok(html.includes("A clone made for practice."))
  const related = anchors.find(link => link.body === "Related project")
  assert.equal(related?.href, "https://atom-clone.netlify.app/")
  assert.ok(
    html.indexOf(">Related project</a>") > html.indexOf(">Reference</h2>"),
  )
  for (const label of ["Source code", "View site", "Original site"]) {
    const link = anchors.find(link => link.title === label)
    assert.equal(link?.["aria-label"], label)
    assert.match(link.body, /aria-hidden="true"/)
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
  for (const path of ["", "projects/", "blog/atom-clone/", "contact/"]) {
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
