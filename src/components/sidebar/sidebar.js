import * as React from 'react'
import { useState, useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { MdClose, MdMenu } from 'react-icons/md';
import * as styles from '../sidebar/sidebar.module.scss'
import Menu from './menu/menu';
import SocialLinks from './social-links/social-links';
import TableOfContents from '../blog/table-of-contents';
import Footer from './footer/footer';


const Sidebar = ({ toc }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sidebarMenu {
            url
            label
          }
          social {
            email
            github
            linkedin
            twitter
            telegram
          }
          footer {
            powered
            inspired
            copyright
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  const clickHandler = () => {
    setOpen(!open)
    updateClassName()
  }

  const updateClassName = () => {
    if (sidebarRef.current.className === styles.sidebar) {
      sidebarRef.current.className += " " + styles.active;
    }
    else {
      sidebarRef.current.className = styles.sidebar;
    }
  }

  return (
    <>
      {/* <div className={styles.sidebar + (open ? " " + styles.active : "")} > */}
      <div className={styles.sidebar} ref={sidebarRef}>

        {/* mobile header */}
        <ul className={styles.mobileHeader}>
            <li className={styles.logo}> <Link to="/">Yixuan's Website</Link> </li>
            <li onClick={clickHandler}>
                {!open &&<a><MdMenu /></a>}
                {open &&<a><MdClose /></a>}
              </li>
        </ul>

        <Menu menu={data.site.siteMetadata.sidebarMenu}/>
        <SocialLinks social={data.site.siteMetadata.social}/>

        <ul className={styles.interactiveArea1}>

          { toc &&
          <TableOfContents items={toc} />
          }

        </ul>

        <ul className={styles.sidebarFooter}>
          <Footer footer={data.site.siteMetadata.footer}/>
        </ul>
      </div>
    </>
  )
}

export default Sidebar