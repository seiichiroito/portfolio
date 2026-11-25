import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { getProjects } from "@/lib/projects"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({ title: "Home" })

const Home = async () => {
  const projects = await getProjects()
  return (
    <>
      <Hero />
      <Projects
        id="works"
        projects={projects}
        title="Works"
        lead="Websites I have made so far, all in one place."
      />
    </>
  )
}

export default Home
