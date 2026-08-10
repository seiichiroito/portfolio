import Contact from "@/components/pages/Contact"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  title: "contact",
  description: "Contact form if you want to contact me",
  image: "/contact.png",
})

const ContactPage = () => {
  return <Contact />
}

export default ContactPage
