import * as React from 'react'
import Layout from '../../components/layout/layout'
import Sidebar from '../../components/sidebar/sidebar'
import Main from '../../components/layout/main'
import BlogPost from '../../components/blog/blog-post'
import { graphql } from 'gatsby'


const PortfolioPage = ({ data }) => {
  const frontmatter = data.mdx.frontmatter;
  const body = data.mdx.body;
  const tableOfContents = data.mdx.tableOfContents.items;
  return (
    <Layout pageTitle={frontmatter.title}>
      <Sidebar toc={tableOfContents}/>
      <Main>
        <BlogPost 
          frontmatter={frontmatter}
          body={body}
        />
        {/* <MyDisqus pageContext={pageContext} frontmatter={frontmatter}/> */}
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        date(formatString: "DD MM YYYY")
        date_updated(formatString: "DD MM YYYY")
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        title
      }
      tableOfContents
    }
  }  
`

export default PortfolioPage