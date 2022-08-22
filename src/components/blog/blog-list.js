import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './blog-list.module.scss';
import Sidebar from '../sidebar/sidebar';
import Pagination from './pagination';


const BlogList = ({ nodes, pageContext }) => {

  return (
    <>
      <Sidebar />
      <div className={styles.content}>
        <ul> {
          nodes.map(node => (
            <li key={node.id} className={styles.blogBlock}>
              <div className={styles.nonImagePart}>
                  <Link 
                    className={styles.postLink} 
                    to={`/blog/${node.slug}`}> 
                    {node.frontmatter.title} 
                  </Link>
                  <p className={styles.postBrief}>
                    {node.frontmatter.description}
                  </p>
                  <p className={styles.postTime}>Posted: {node.frontmatter.date}</p>
              </div>

              <div className={styles.imagePart}>
                  <GatsbyImage 
                    class={styles.img}
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                  />
              </div>
            </li>
          ))
        } </ul>
          <Pagination pageContext={pageContext} />
      </div>

    </>
  )
}

export default BlogList