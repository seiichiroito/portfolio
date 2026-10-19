import AllProjects from "@/components/pages/AllProjects"
import { getProjects } from "@/lib/projects"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  path: "/projects",
  title: "Projects",
  description: "showcase of products made by Seiichiro",
  image: "/projects.png",
})

const ProjectsPage = async () => {
  const projects = await getProjects()
  return <AllProjects projects={projects} />
}

export default ProjectsPage
