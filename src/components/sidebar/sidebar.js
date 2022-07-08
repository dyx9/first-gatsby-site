import * as React from 'react'
import { useRef, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';

import '../layout/layout.css'

const Sidebar = () => {
  const sidebarRef = useRef(null)
  const [openSidebar, setOpenSidebar] = useState(false)

  const onToggle = () => {
    setOpenSidebar(pre => !pre)
      updateClassName()
  }

  const updateClassName = () => {
      if (sidebarRef.current.className == "sidebar") {
        sidebarRef.current.className = 'sidebar active'
      }
      else{
        sidebarRef.current.className = 'sidebar'
      }

  }

  return (
    <>
        <ul class='mobile-header'>
            <li className='toggle' onClick={onToggle}>
              {!openSidebar &&<a><MdMenu /></a>}
              {openSidebar &&<a><MdClose /></a>}
            </li>
            <li className='logo'><a href="#" >Yixuan's Website</a></li>
        </ul>

        <div className='sidebar'  ref={sidebarRef}>
          <ul className='menu'>
            <li className='logo'>
              <Link to="/">Yixuan's Website</Link>
            </li>

            <li className='item'>
              <Link to="/about">About</Link>
            </li>

            <li className='item'>
              <Link to="/blog">Blog</Link>
            </li>

            <li className='item'>
              <Link to="/">Contact</Link>
            </li>
          </ul>

          <ul class="interactive-area-1">
              <li class="item"><a href="#">interactive-area-1</a></li>
              <li class="item"><a href="#">interactive-area-1</a></li>
              <li class="item"><a href="#">interactive-area-1</a></li>
          </ul>

          <ul class="side-bar-footer">
              <li class="item"><a href="#">footer content line 1</a></li>
              <li class="item"><a href="#">footer content line 2</a></li>
          </ul>
        </div>
  </>

  )
}

export default Sidebar