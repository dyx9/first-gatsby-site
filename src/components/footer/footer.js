import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './footer.module.scss';

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footer {
            powered
            inspired
            copyright
          }
        }
      }
    }
  `)

  const footerLink = data.site.siteMetadata.footer;

  return (
    <div className={styles.footerContainer}>
      <p>
        Powered by&nbsp;
        <a href={footerLink.powered} target="_blank" rel="noreferrer">Gatsby</a>
        &nbsp;and inspired by&nbsp;
        <a href={footerLink.inspired} target="_blank" rel="noreferrer">Breeze Theme</a>
      </p>
      <p>© 2022 Copyright&nbsp;
        <a href={footerLink.copyright} target="_blank" rel="noreferrer">Yixuan</a>
        &nbsp;All rights reserved.</p>
    </div>
  )
}

export default Footer