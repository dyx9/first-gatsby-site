import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout/layout'
import '../../components/layout/layout.css'

const BlogPage = ({ data }) => {

    return(
        <Layout >
            <ul className='blog'> {
              data.allMdx.nodes.map(node => (
                <li key={node.id} className='blog-block'>
                    <a>
                      <Link to={`/blog/${node.slug}`}
                        style={{color: 'grey'}}>
                        {node.frontmatter.title}
                      </Link>
                    </a>
                    <p>Posted: {node.frontmatter.date}</p>
                </li>
              ))
}           </ul>
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