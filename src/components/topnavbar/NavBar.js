import * as React from 'react'
import { useRef, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'gatsby';
import "../topnavbar/NavBar.css"

const NavBar = () => {
  const menuRef = useRef(null)
  const [openMenu, setOpenMenu] = useState(false)

  const onToggle = () => {
      setOpenMenu(pre => !pre)
      updateClassName()
  }

  const updateClassName = () => {
      if (menuRef.current.className == "menu") {
          menuRef.current.className = 'menu active'
      }
      else{
          menuRef.current.className = 'menu'
      }

  }

  return (
    <nav>
        <ul className="menu" ref={menuRef}>

          <li className="logo">
            <Link to="/">Home</Link>
          </li>

          <li className="item">
            <Link to="/about">About</Link>
          </li>

          <li className="item">
            <Link to="/blog">Blog</Link>
          </li>

          <li className="item">
            <Link to="/">Contact</Link>
          </li>

          <li className="toggle" onClick={onToggle}>
            {!openMenu &&<a><MdMenu /></a>}
            {openMenu &&<a><MdClose /></a>}
          </li>

        </ul>
        
    </nav>
  )
}

export default NavBar