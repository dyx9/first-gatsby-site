import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { MdClose, MdMenu } from 'react-icons/md';
import * as styles from '../sidebar/sidebar.module.scss'
import Menu from './menu/menu';
import SocialLinks from './social-links/social-links';
import TableOfContents from '../blog/table-of-contents';
import TagsList from '../blog/tags-list';
import Footer from './footer/footer';


const Sidebar = ({ toc, tags }) => {

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

  const [openSidebar, setOpenSidebar] = useState(false)
  //const [active, setActive] = useState(false)

  return (
    <>
      <div className={openSidebar ? styles.sidebar+' '+styles.active : styles.sidebar} >

        {/* mobile header */}
        <ul className={styles.mobileHeader}>
            <li className={styles.logo}> <Link to="/">Yixuan's Website</Link> </li>
            <li onClick={() => setOpenSidebar(!openSidebar)}>
                {!openSidebar &&<a><MdMenu /></a>}
                {openSidebar &&<a><MdClose /></a>}
            </li>
        </ul>

        <Menu menu={data.site.siteMetadata.sidebarMenu}/>
        <SocialLinks social={data.site.siteMetadata.social}/>

        <ul className={toc ? styles.interactiveArea+' '+styles.active : styles.interactiveArea}>
          {toc && <TableOfContents items={toc} />}
        </ul>

        <ul className={tags ? styles.interactiveArea+' '+styles.active : styles.interactiveArea}>
          {tags && <TagsList nodes={tags} />}
        </ul>

        <ul>
          <Footer footer={data.site.siteMetadata.footer}/>
        </ul>
      </div>
    </>
  )
}

export default Sidebar