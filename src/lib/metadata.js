import { siteMetadata } from "./site"

export const buildMetadata = ({ title, description, image, path = "" } = {}) => {
  const metaDescription = description || siteMetadata.siteDescription
  const metaImage = `${siteMetadata.siteUrl}${image || siteMetadata.siteImage}`

  return {
    title,
    description: metaDescription,
    alternates: {
      canonical: `${siteMetadata.siteUrl}${path}/`,
    },
    openGraph: {
      title: title || siteMetadata.siteTitle,
      description: metaDescription,
      type: "website",
      images: [metaImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: siteMetadata.twitterUsername,
      title: title || siteMetadata.siteTitle,
      description: metaDescription,
      images: [metaImage],
    },
  }
}
