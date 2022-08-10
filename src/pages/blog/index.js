import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Blog from '../../components/blog/blog-list';

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle="Blog">
          <Blog nodes={data.allMdx.nodes} />
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___title, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY, MM DD")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        slug
      }
    }
  }
  
`


export default BlogPage