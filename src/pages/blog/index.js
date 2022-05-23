import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const BlogPage = ({ data }) => {
    deckDeckGoHighlightElement();
    return(
        <Layout pageTitle="My Blog Page">
            {
              data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                      <h2>
                        <Link to={`/blog/${node.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                      </h2>
                      <p>Posted: {node.frontmatter.date}</p>
                  </article>
              ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY, MM D")
          title
        }
        id
        slug
      }
    }
  }
  
  
`


export default BlogPage