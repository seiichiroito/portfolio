import About from "@/components/pages/About"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  path: "/about",
  title: "About",
  description: "Information about website author.",
  image: "/about.png",
})

const AboutPage = () => {
  return <About />
}

export default AboutPage
