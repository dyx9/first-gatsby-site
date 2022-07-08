import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css'
import Sidebar from '../sidebar/sidebar'




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
    <div className='container'>
      <Sidebar />
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <main className='content'>
        <h1 className='heading'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout