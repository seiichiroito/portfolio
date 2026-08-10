import fs from "fs"
import path from "path"
import matter from "gray-matter"

const POSTS_DIR = path.join(process.cwd(), "src", "posts")

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const ordinal = day => {
  if (day % 100 >= 11 && day % 100 <= 13) return `${day}th`
  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

// Same display format as the previous Gatsby site: "MMM Do, YYYY"
export const formatDate = date => {
  const d = new Date(date)
  return `${MONTHS[d.getUTCMonth()]} ${ordinal(d.getUTCDate())}, ${d.getUTCFullYear()}`
}

const readPost = dirName => {
  const filePath = path.join(POSTS_DIR, dirName, "post.mdx")
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)
  return {
    id: data.slug,
    content,
    frontmatter: {
      ...data,
      date: formatDate(data.date),
      rawDate: new Date(data.date).toISOString(),
    },
  }
}

export const getAllPosts = ({ limit } = {}) => {
  if (!fs.existsSync(POSTS_DIR)) return []
  const posts = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .filter(entry =>
      fs.existsSync(path.join(POSTS_DIR, entry.name, "post.mdx"))
    )
    .map(entry => readPost(entry.name))
    .sort(
      (a, b) => new Date(b.frontmatter.rawDate) - new Date(a.frontmatter.rawDate)
    )
  return limit ? posts.slice(0, limit) : posts
}

export const getPostBySlug = slug => {
  return getAllPosts().find(post => post.frontmatter.slug === slug) ?? null
}
