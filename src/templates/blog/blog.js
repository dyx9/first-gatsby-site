import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import BlogList from '../../components/blog/blog-list';
import Pagination from '../../components/blog/pagination';

const BlogPage = ({data, pageContext}) => {

    return (
        <Layout pageTitle="Blog">
          <BlogList nodes={data.allMdx.nodes} pageContext={pageContext}/>
        </Layout>
    )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: {
        fields: frontmatter___date
        order: DESC}
        limit: $limit
        skip: $skip
      ) {
      nodes {
        frontmatter {
          title
          description
          date(formatString: "DD MM YYYY")
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