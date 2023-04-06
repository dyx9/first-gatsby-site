import * as React from 'react'
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout'
import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/layout/main';
import BlogPost from '../../components/blog/blog-post';
import Pagination from '../../components/blog/pagination';
import { Disqus } from 'gatsby-plugin-disqus';


const BlogPostTemplate = ({ data, pageContext }) => {
  const frontmatter = data.mdx.frontmatter;
  const body = data.mdx.body;
  const tableOfContents = data.mdx.tableOfContents.items;

  const hasPrev = pageContext.prev !== null;
  const hasNext = pageContext.next !== null;
  const prevPage = pageContext.prev?.slug
  const nextPage = pageContext.next?.slug
  const prevTitle = pageContext.prev?.frontmatter.title
  const nextTitle = pageContext.next?.frontmatter.title

  const disqusConfig = {
    url: `https://dyx.gatsbyjs.io/blog/${pageContext.slug}`,
    identifier: pageContext.slug,
    title: frontmatter.title,
  }

  console.log(disqusConfig);

  return (
    <Layout pageTitle={frontmatter.title}>
      <Sidebar toc={tableOfContents}/>
      <Main>
        <BlogPost 
          frontmatter={frontmatter}
          body={body}
        />
        <Pagination 
          hasPrev={hasPrev} 
          hasNext={hasNext}
          prev={prevPage}
          next={nextPage}
          prevText={prevTitle}
          nextText={nextTitle}
        />

        <Disqus config={disqusConfig} />
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

export default BlogPostTemplate