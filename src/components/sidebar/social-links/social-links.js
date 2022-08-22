import { 
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi'
import React from 'react'
import * as styles from './social-links.module.scss';
import { TbBrandTelegram } from 'react-icons/tb'
import { graphql, useStaticQuery } from 'gatsby'


const SocialLinks = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            email
            github
            linkedin
            twitter
            telegram
          }
        }
      }
    }
  `)

  const links = data.site.siteMetadata.social

  const setIcons = (name) => {
    switch (name) {
      case 'email':
        return <FiMail />
      case 'github': 
        return <FiGithub />
      case 'twitter':
        return <FiTwitter />
      case 'linkedin':
        return <FiLinkedin />
      case 'telegram':
        return <TbBrandTelegram />
      default:
        break;
    }
  }

  return (
    <div className={styles.socialLinkContainer}>
      {
        Object.entries(links).map(l => 
            <a 
              key={l[0]} 
              href={l[1]}
              rel="noreferrer noopener"
              target="_blank"
            >
              {setIcons(l[0])}
            </a>
        )
      }
    </div>

  )
}

export default SocialLinks