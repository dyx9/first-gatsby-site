import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import * as styles from './blog-post.module.scss';


const BlogPost = ({ frontmatter, body }) => {

  deckDeckGoHighlightElement();

  return (
    <>
      <a href={frontmatter.hero_image_credit_link} target="_blank" rel="noreferrer">
        <GatsbyImage
          className={styles.heroImage}
          image={getImage(frontmatter.hero_image)}
          alt={frontmatter.hero_image_alt}
        />
      </a>

      <p className={styles.title}>{frontmatter.title}</p>
      <p className={styles.date}>Date Created: {frontmatter.date}</p>
      
      { frontmatter.date_updated && 
        <p className={styles.date}>Date Modified: {frontmatter.date_updated}</p>
      }

      <div className={styles.MDXBody}>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </div>
    </>

  )
}

export default BlogPost