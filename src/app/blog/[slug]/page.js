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

export const generateMetadata = ({ params }) => {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const { title, twitterImage } = post.frontmatter
  return buildMetadata({
    title,
    description: title,
    image: twitterImage,
  })
}

const PostPage = ({ params }) => {
  const post = getPostBySlug(params.slug)
  if (!post) {
    notFound()
  }
  return (
    <BlogPost frontmatter={post.frontmatter}>
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{ scope: getScope(params.slug) }}
      />
    </BlogPost>
  )
}

export default PostPage
