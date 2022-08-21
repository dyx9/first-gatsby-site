import * as React from 'react'
import { useState, useRef } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import TableOfContents from '../blog/table-of-contents';
import Footer from './footer/footer';
import * as styles from '../sidebar/sidebar.module.scss'
import SocialLinks from './social-links/social-links';
import { Link } from 'gatsby';

const Sidebar = ({ toc }) => {

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

        <ul className={styles.menu}>
          <li className={styles.logo}> <Link to="/">Yixuan's Website</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/blog">Blog</Link> </li>
          <li> <Link to="/">Contact</Link> </li>
          <li> <Link to="/">Placeholder</Link> </li>
          <li> <Link to="/">Placeholder</Link> </li>

          <SocialLinks />
        </ul>

        <ul className={styles.interactiveArea1}>

          { toc &&
          <TableOfContents items={toc} />
          }

        </ul>

        <ul className={styles.sidebarFooter}>
          <Footer />
        </ul>
      </div>
    </>
  )
}

export default Sidebar