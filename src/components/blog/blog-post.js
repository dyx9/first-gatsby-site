import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase'
import { FiTag } from 'react-icons/fi'
import { BiCalendar, BiCalendarEdit } from 'react-icons/bi'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import * as styles from './blog-post.module.scss';


const BlogPost = ({ frontmatter, body }) => {

  deckDeckGoHighlightElement();

  return (
    <>
      <div className={styles.heroImageContainer}>
        <GatsbyImage
            className={styles.heroImage}
            image={getImage(frontmatter.hero_image)}
            alt={frontmatter.hero_image_alt}
        />
        <div className={styles.overlay}>
          <a href={frontmatter.hero_image_credit_link} target="_blank" rel="noreferrer">
            {frontmatter.hero_image_alt} by: {frontmatter.hero_image_credit_text}
          </a>
        </div>
      </div>

      <p className={styles.title}>{frontmatter.title}</p>

      <span className={styles.date}> <BiCalendar /> 
        <p className={styles.dateText}>
          {frontmatter.date}
        </p>
      </span>
      
      { 
        frontmatter.date_updated && 
        <span className={styles.date}><BiCalendarEdit />
          <p className={styles.dateText}>
            {frontmatter.date_updated}
          </p>
        </span>
      }

      { 
        frontmatter.tags && (
          <span className={styles.tags}>
            <FiTag />
            {
              frontmatter.tags.map(tag => 
              <Link
                to={`/blog/tags/${kebabCase(tag)}`}
                key={tag}
              >
                {`${tag}`}
              </Link>
              )
            }
          </span>

        )

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