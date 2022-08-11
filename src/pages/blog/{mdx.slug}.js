import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout'
import BlogPost from '../../components/blog/blog-post';


const BlogPage = ({ data }) => {
  const frontmatter = data.mdx.frontmatter;
  const body = data.mdx.body;

  return (
    <Layout pageTitle={frontmatter.title}>
      <BlogPost 
        frontmatter={frontmatter}
        body={body}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPage