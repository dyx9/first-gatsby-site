import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.scss';


const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {children}
    </div>
  )
}

export default Layout