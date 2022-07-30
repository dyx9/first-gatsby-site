import * as React from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import '../layout/layout.css'

const MobileNavbar = ({onToggle, openSidebar}) => {

    return (
      <>
          <ul className='mobile-header'>
              <li className='toggle' onClick={onToggle}>
                {!openSidebar &&<a><MdMenu /></a>}
                {openSidebar &&<a><MdClose /></a>}
              </li>
              <li className='logo'><a href="/">Yixuan's Website</a></li>
          </ul>
    </>
  
    )
  }
  
  export default MobileNavbar