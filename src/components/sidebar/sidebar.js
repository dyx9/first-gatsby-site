import * as React from 'react'
import { useState, useRef } from 'react'
import MobileNavbar from '../mobile-navbar/mobile-navbar'
import * as styles from '../sidebar/sidebar.module.scss'

const Sidebar = () => {

    const [open, setOpen] = useState(false)
    const sidebarRef = useRef(null)

    const clickHandler = () => {
        setOpen(!open)
        updateClassName()
    }

    const updateClassName = () => {
        console.log(styles.sidebar);
        console.log(sidebarRef);
        if (sidebarRef.current.className === styles.sidebar) {
            sidebarRef.current.className += " " + styles.active;
        }
        else {
            sidebarRef.current.className = styles.sidebar;
        }
        
        console.log(sidebarRef);
    }

  return (
    <>
        {/* <div className={styles.sidebar + (open ? " " + styles.active : "")} > */}
        <div className={styles.sidebar} ref={sidebarRef}>
            <MobileNavbar onToggle={clickHandler} open={open}/>
            <ul className={styles.menu}>
                <li className={styles.logo}>
                    <a href="/">Yixuan's Website</a>
                </li>

                <li className='item'>
                    <a href="/about">About</a>
                </li>

                <li className='item'>
                    <a href="/blog">Blog</a>
                </li>

                <li className='item'>
                    <a hrefo="/">Contact</a>
                </li>
            </ul>

            <ul className={styles.interactiveArea1}>
                <li className="item"><a href="#">interactive</a></li>
                <li className="item"><a href="#">interactive</a></li>
                <li className="item"><a href="#">interactive</a></li>
            </ul>

            <ul className={styles.sidebarFooter}>
                <li className="item"><a href="#">footer</a></li>
                <li className="item"><a href="#">footer</a></li>
            </ul>
        </div>
    </>

  )
}

export default Sidebar