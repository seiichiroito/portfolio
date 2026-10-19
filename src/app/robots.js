import { siteMetadata } from "@/lib/site"

export const dynamic = "force-static"

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
