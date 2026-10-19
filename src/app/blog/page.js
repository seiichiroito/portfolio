import AllBlog from "@/components/pages/AllBlog"
import { getAllPosts } from "@/lib/posts"
import { buildMetadata } from "@/lib/metadata"

export const metadata = buildMetadata({
  path: "/blog",
  title: "Blog",
  description: "A place where my thoughts are summarized.",
  image: "/blog.png",
})

const BlogPage = () => {
  const blogs = getAllPosts()
  return <AllBlog blogs={blogs} />
}

export default BlogPage
