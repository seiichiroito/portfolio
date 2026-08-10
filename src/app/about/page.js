import About from "@/components/pages/About"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "About",
  description: "Information about website author.",
  image: "/about.png",
})

const AboutPage = () => {
  return <About />
}

export default AboutPage
