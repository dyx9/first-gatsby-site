import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout'
import '../../components/layout/layout.css'
import imagePlaceHolder from '../../images/Safari.jpeg'

const BlogPage = ({ data }) => {

    return (
        <Layout >
            <ul className='blog'> {
                data.allMdx.nodes.map(node => (
                    <li key={node.id} className='blog-block'>
                        <div className='non-image-part'>
                            <Link to={`/blog/${node.slug}`}> {node.frontmatter.title} </Link>
                            <p>
                                This is is a short and general introduction of a blog post, 
                                this should normally takes up to two lines of the blog block
                            </p>
                            <p className=''>Posted: {node.frontmatter.date}</p>
                        </div>

                        <div className="image-part">
                            <GatsbyImage class='img'
                                image={getImage(node.frontmatter.hero_image)}
                                alt={node.frontmatter.hero_image_alt}
                            />
                        </div>
                    </li>
                ))
            } </ul>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___title, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY, MM DD")
          title
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