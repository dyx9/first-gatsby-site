import * as React from 'react'
import { useState, useRef } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import * as styles from '../sidebar/sidebar.module.scss'

const Sidebar = () => {

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
            <li className={styles.logo}> <a href="/">Yixuan's Website</a> </li>
            <li onClick={clickHandler}>
                {!open &&<a><MdMenu /></a>}
                {open &&<a><MdClose /></a>}
              </li>
        </ul>

        <ul className={styles.menu}>
          <li className={styles.logo}> <a href="/">Yixuan's Website</a> </li>
          <li> <a href="/about">About</a> </li>
          <li> <a href="/blog">Blog</a> </li>
          <li> <a hrefo="/">Contact</a> </li>
        </ul>

        <ul className={styles.interactiveArea1}>
          <li> <a href="#">interactive</a> </li>
          <li> <a href="#">interactive</a> </li>
          <li> <a href="#">interactive</a> </li>
        </ul>

        <ul className={styles.sidebarFooter}>
          <li> <a href="#">footer</a> </li>
          <li> <a href="#">footer</a> </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar