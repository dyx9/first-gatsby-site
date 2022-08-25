import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Sidebar from '../../components/sidebar/sidebar'
import Main from '../../components/layout/main'
import BlogList from '../../components/blog/blog-list'


const TagsTemplate = ({ data, pageContext }) => {

  const nodes = data.allMdx.nodes
  const { currentTag, count } = pageContext

  return(
    <Layout pageTitle="Tags List">
      <Sidebar />
      <Main>
        <p>Current Tag is: {currentTag}, and there are {count} posts</p>
        <BlogList nodes={nodes} />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query ($currentTag: [String]) {
    allMdx(
      filter: {frontmatter: {tags: {in: $currentTag}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        slug
        id
        frontmatter {
          title
          description
          date
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
      }
    }
  }
`
export default TagsTemplate

