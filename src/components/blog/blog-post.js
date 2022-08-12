import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './blog-post.module.scss';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { Link } from 'gatsby';


const BlogPost = ({ frontmatter, body }) => {

  return (
    <>
      <Link to={frontmatter.hero_image_credit_link}>
        <GatsbyImage
          className={styles.heroImage}
          image={getImage(frontmatter.hero_image)}
          alt={frontmatter.hero_image_alt}
        />
      </Link>

      <p className={styles.title}>{frontmatter.title}</p>
      <p className={styles.date}>{frontmatter.date}</p>

      <div className={styles.MDXBody}>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </div>


    </>
  )
}

export default BlogPost