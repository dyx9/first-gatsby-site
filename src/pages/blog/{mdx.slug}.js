import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout'
import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/layout/main';
import BlogPost from '../../components/blog/blog-post';



const BlogPage = ({ data }) => {
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
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date(formatString: "DD MM YYYY")
        date_updated(formatString: "DD MM YYYY")
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

export default BlogPage