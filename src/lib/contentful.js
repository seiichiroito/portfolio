import { createClient } from "contentful"

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_API_KEY

const getClient = () => {
  if (!space || !accessToken) {
    return null
  }
  return createClient({ space, accessToken })
}

const mapProject = item => {
  const { title, description, tags, github, url, image } = item.fields
  const file = image?.fields?.file
  return {
    id: item.sys.id,
    title,
    description,
    tags: tags ?? [],
    github,
    url,
    image: file
      ? {
          url: `https:${file.url}`,
          width: file.details?.image?.width ?? 800,
          height: file.details?.image?.height ?? 600,
        }
      : null,
  }
}

export const getProjects = async ({ featuredOnly = false } = {}) => {
  const client = getClient()
  if (!client) {
    console.warn(
      "CONTENTFUL_SPACE_ID / CONTENTFUL_API_KEY are not set. Returning empty project list."
    )
    return []
  }
  try {
    const query = {
      content_type: "project",
      order: "sys.createdAt",
    }
    if (featuredOnly) {
      query["fields.featured"] = true
    }
    const entries = await client.getEntries(query)
    return entries.items.map(mapProject)
  } catch (error) {
    console.error("Failed to fetch projects from Contentful:", error.message)
    return []
  }
}
