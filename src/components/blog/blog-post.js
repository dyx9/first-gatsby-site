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
      <a href={frontmatter.hero_image_credit_link} target="_blank" rel="noreferrer">
        <GatsbyImage
          className={styles.heroImage}
          image={getImage(frontmatter.hero_image)}
          alt={frontmatter.hero_image_alt}
        />
      </a>

      <p className={styles.title}>{frontmatter.title}</p>
      <p className={styles.date}> <BiCalendar /> {frontmatter.date}</p>
      
      { 
        frontmatter.date_updated && 
        <p className={styles.date}><BiCalendarEdit /> {frontmatter.date_updated}</p>
      }

      { 
        frontmatter.tags && (
          <span className={styles.date}>
            <FiTag />
            {
              frontmatter.tags.map(tag => 
              <Link
                to={`/blog/tags/${kebabCase(tag)}`}
                key={tag}
              >
                {` ${tag} `}
              </Link>
              )
            }
          </span>

        )

      }

      {/* {
        Object.entries(frontmatter.tags).map(tag => (<span>{tag[1]}</span>))
      } */}


      <div className={styles.MDXBody}>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </div>
    </>

  )
}

export default BlogPost