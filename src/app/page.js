import Hero from "@/components/Hero"
import Stacks from "@/components/Stacks"
import Projects from "@/components/Projects"
import Blogs from "@/components/Blogs"
import { getProjects } from "@/lib/contentful"
import { getAllPosts } from "@/lib/posts"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({ title: "Home" })

const Home = async () => {
  const projects = await getProjects({ featuredOnly: true })
  const blogs = getAllPosts({ limit: 3 })
  return (
    <>
      <Hero />
      <Stacks />
      <Projects projects={projects} title="Project" showLink />
      <Blogs blogs={blogs} title="Latest Blog" showLink />
    </>
  )
}

export default Home
