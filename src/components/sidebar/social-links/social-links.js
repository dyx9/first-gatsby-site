import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

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
          }
        }
      }
    }
  `)

  const links = data.site.siteMetadata.social

  return (
    <>
      {
        Object.entries(links).map(l => 
          <a 
            key={l[0]} 
            href={l[1]}
            rel="noreferrer noopener"
            target="_blank"
          >
            <p>{l[0]}</p> 
          </a>
        )
      }
    </>

  )
}

export default SocialLinks