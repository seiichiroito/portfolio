import projects from "@/data/projects.json"

export const getProjects = async ({ featuredOnly = false } = {}) =>
  projects
    .filter(project => !featuredOnly || project.featured === true)
    .map(({ id, title, description, tags, github, url, image }) => ({
      id,
      title,
      description,
      tags: tags ?? [],
      github,
      url,
      image: image
        ? { url: image.src, width: image.width, height: image.height }
        : null,
    }))
