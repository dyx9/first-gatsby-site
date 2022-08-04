import * as React from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import '../layout/layout.css'

const MobileNavbar = ({onToggle, open}) => {

    return (
      <>
          <ul className='mobile-header'>
              <li className='toggle' onClick={onToggle}>
                {!open &&<a><MdMenu /></a>}
                {open &&<a><MdClose /></a>}
              </li>
              <li className='logo'><a href="/">Yixuan's Website</a></li>
          </ul>
    </>
  
    )
  }
  
  export default MobileNavbar