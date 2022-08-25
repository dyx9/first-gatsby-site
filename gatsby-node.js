const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 2000) {
          edges {
            node {
              slug
            }
            next {
              slug
              frontmatter {
                title
              }
            }
            previous {
              slug
              frontmatter {
                title
              }
            }
          }
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.edges;

  // Generate blog-list page with pagination
  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Generate blog-post page with links to adjacent posts
  posts.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog/blog-post.js"),
      context: {
        slug: edge.node.slug,
        prev: edge.previous,
        next: edge.next,
      },
    })
  })

  // Generate tags-list page
  createPage({
    path: `/blog/tags`,
    component: path.resolve("./src/templates/blog/tags-list.js"),
  })

  // Generate tags page
  const tags = result.data.allMdx.group;
  tags.forEach(tag => {
    createPage({
      path: `/blog/tags/${tag.fieldValue}`,
      component: path.resolve("./src/templates/blog/tags.js"),
      context: { 
        currentTag: tag.fieldValue 
      }
    })
  });

}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }