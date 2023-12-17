import * as React from 'react'
import Layout from '../../components/layout/layout'
import Sidebar from '../../components/sidebar/sidebar'
import Main from '../../components/layout/main'
import { graphql } from 'gatsby'
import PortfolioList from '../../components/portfolio/portfolio-list'

const PortfolioListPage = ({ data }) => {
  return(
    <Layout pageTitle="Portfolio">
      <Sidebar />
      <Main>
        <p>Hi, this is the Portfolio page</p>

        <PortfolioList nodes = {data.allMdx.nodes} />
      </Main>
    </Layout>
  )
}

export default PortfolioListPage

export const query = graphql`
  query {
    allMdx(
      sort: {
        fields: frontmatter___date
        order: DESC 
      }
      filter: {fileAbsolutePath: {regex: "/portfolio/"}}
    ) 
    {
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
          tags
        }
        id
        slug
      }
    }
  }
`