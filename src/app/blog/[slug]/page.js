import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

import BlogPost from "@/components/pages/BlogPost"
import { mdxComponents } from "@/components/MDX"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { getScope } from "@/posts/scope"
import { buildMetadata } from "@/lib/metadata"

export const dynamicParams = false

export const generateStaticParams = () => {
  return getAllPosts().map(post => ({ slug: post.frontmatter.slug }))
}

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { title, twitterImage } = post.frontmatter
  return buildMetadata({
    title,
    description: title,
    image: twitterImage,
  })
}

const PostPage = async ({ params }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  return (
    <BlogPost frontmatter={post.frontmatter}>
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          scope: getScope(slug),
          // Posts are trusted content in this repo; v6 blocks JSX expressions
          // (e.g. `apps={codeApp}`) by default, which our posts rely on.
          blockJS: false,
        }}
      />
    </BlogPost>
  )
}

export default PostPage
