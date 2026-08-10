import { getAllPosts } from "@/lib/posts"
import { siteMetadata } from "@/lib/site"

const sitemap = () => {
  const staticPages = ["", "/about", "/projects", "/blog", "/contact"].map(
    route => ({
      url: `${siteMetadata.siteUrl}${route}`,
      lastModified: new Date(),
    })
  )

  const posts = getAllPosts().map(post => ({
    url: `${siteMetadata.siteUrl}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.rawDate,
  }))

  return [...staticPages, ...posts]
}

export default sitemap
