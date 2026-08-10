import { siteMetadata } from "@/lib/site"

const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}

export default robots
