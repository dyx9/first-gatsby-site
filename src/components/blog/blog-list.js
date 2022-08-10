import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './blog-list.module.scss';


const BlogList = ({ nodes }) => {

  return (
    <>
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
                    This is is a short and general introduction of a blog post, 
                    this should normally takes up to two lines of the blog block
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
    </>
  )
}

export default BlogList