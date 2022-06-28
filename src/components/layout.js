import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
} from './layout.module.css'

import NavBar from './NavBar';


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
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <NavBar />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout