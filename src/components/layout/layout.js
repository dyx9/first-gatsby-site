import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Sidebar from '../sidebar/sidebar';
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
      <Sidebar/>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <main className={styles.content}>
        {/* <h1 className='heading'>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  )
}

export default Layout