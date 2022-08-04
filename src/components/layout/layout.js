import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useRef, useState, } from 'react';
import Sidebar from '../sidebar/sidebar';
import * as styles from './layout.module.scss';


const Layout = ({ pageTitle, children }) => {

  // const sidebarRef = useRef(null)
  // const contentRef = useRef(null)
  // const [openSidebar, setOpenSidebar] = useState(false)

  // const onToggle = () => {
  //   setOpenSidebar(pre => !pre)
  //   updateClassName()
  // }

  // const updateClassName = () => {
  //   if (sidebarRef.current.className == "sidebar") {
  //     sidebarRef.current.className = 'sidebar active'
  //     contentRef.current.className = 'content push'
  //   }
  //   else{
  //     sidebarRef.current.className = 'sidebar'
  //     contentRef.current.className = 'content'
  //   }
  // }

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
      <Sidebar
        // onToggle={onToggle}
        // openSidebar={openSidebar}
        // sidebarRef={sidebarRef}
      />
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <main className={styles.content}>
        {/* <h1 className='heading'>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  )
}

export default Layout