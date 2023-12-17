import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './portfolio-list.module.scss';


const PortfolioList = ({ nodes }) => {
  nodes.map((node) => console.log(node.frontmatter.hero_image.absolutePath))

  return (
    <div className={styles.portfolioBlock}>
      {
        nodes.map(node => (
          <Link 
            key={node.id} 
            className={styles.portfolioItem} 
            to={`${node.slug}`} 
            // style={{ backgroundImage: 'url(' + node.frontmatter.hero_image.publicURL + ')' }}
          >

            <div className={styles.backgroundImageContainer} style={{ backgroundImage: `url(${node.frontmatter.hero_image.publicURL})` }}>
              {/* Background image container */}
            </div>

            <div className={styles.portfolioInfo}>
              <p className={styles.title}>{node.frontmatter.title}</p>
              <p className={styles.postBrief}>{node.frontmatter.description}</p>
            </div>
          </Link>
          //           <Link key={node.id} className={styles.portfolioItem} to={`${node.slug}`}>
          //     <div className={styles.imagePart}>
          //         <GatsbyImage 
          //           className={styles.img}
          //           image={getImage(node.frontmatter.hero_image)}
          //           alt={node.frontmatter.hero_image_alt}
          //         />
          //     </div>
          //     <div className={styles.portfolioInfo}>
          //         <p className={styles.title}>{node.frontmatter.title}</p>
          //         <p className={styles.postBrief}>
          //           {node.frontmatter.description}
          //         </p>
          //         {/* <p className={styles.postTime}>Posted: {node.frontmatter.date}</p> */}
          //     </div>
          // </Link>
        ))
      }
    </div>
  )
}

export default PortfolioList