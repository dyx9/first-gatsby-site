import * as React from 'react'
import MobileNavbar from '../mobile-navbar/mobile-navbar'
import '../layout/layout.css'

const Sidebar = ({onToggle, openSidebar, sidebarRef}) => {

  return (
    <>
        <div className='sidebar' ref={sidebarRef}>
            <MobileNavbar onToggle={onToggle} openSidebar={openSidebar}/>
            <ul className='menu'>
                <li className='logo'>
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

            <ul className="interactive-area-1">
                <li className="item"><a href="#">interactive</a></li>
                <li className="item"><a href="#">interactive</a></li>
                <li className="item"><a href="#">interactive</a></li>
            </ul>

            <ul className="side-bar-footer">
                <li className="item"><a href="#">footer</a></li>
                <li className="item"><a href="#">footer</a></li>
            </ul>
        </div>
    </>

  )
}

export default Sidebar