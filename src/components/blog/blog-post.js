import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './blog-post.module.scss';

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";


const BlogPost = ({ frontmatter, body }) => {

  return (
    <>
      <p>{frontmatter.date}</p>
      <GatsbyImage
        image={getImage(frontmatter.hero_image)}
        alt={frontmatter.hero_image_alt}
      />
      
      <p>
        Photo Credit:{" "}
        <a href={frontmatter.hero_image_credit_link}>
          {frontmatter.hero_image_credit_text}
        </a>
      </p>

      <MDXRenderer>
        {body}
      </MDXRenderer>

    </>
  )
}

export default BlogPost