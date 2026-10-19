import projects from "@/data/projects.json"

export const getProjects = ({ featuredOnly = false } = {}) =>
  projects.filter(project => !featuredOnly || project.featured)
