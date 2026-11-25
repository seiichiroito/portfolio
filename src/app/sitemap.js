import { siteMetadata } from "@/lib/site"

export const dynamic = "force-static"

const sitemap = () =>
  ["", "/about", "/projects", "/contact"].map(route => ({
    url: `${siteMetadata.siteUrl}${route}/`,
    lastModified: new Date(),
  }))

export default sitemap
