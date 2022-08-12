import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './blog-post.module.scss';
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";


const BlogPost = ({ frontmatter, body }) => {


  return (
    <>

      <GatsbyImage
        className={styles.heroImage}
        image={getImage(frontmatter.hero_image)}
        alt={frontmatter.hero_image_alt}
      />
      <p className={styles.credit}>
        Photo Credit:{" "}
        <a href={frontmatter.hero_image_credit_link}>
          {frontmatter.hero_image_credit_text}
        </a>
      </p>

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