const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  result.data.allMdx.nodes.forEach(post => {
    const {
      frontmatter: { slug },
    } = post
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: slug,
      },
    })
  })
}
