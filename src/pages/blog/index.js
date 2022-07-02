import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {

    return(
        <Layout pageTitle="My Blog Page">
            {
              data.allMdx.nodes.map(node => (
                  <article key={node.id}>
                      <h2>
                        <Link to={`/blog/${node.slug}`}
                          style={{color: 'grey'}}>
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