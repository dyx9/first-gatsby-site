import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as styles from './menu.module.scss';

const Menu = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          sidebarMenu {
            url
            label
          }
        }
      }
    }
  `)

  const menuList = data.site.siteMetadata.sidebarMenu;
  const currentPath = window.location.href;

  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.logo}> <Link to="/">Yixuan's Website</Link> </li>
        {
          menuList.map(m => 
          <li key={m.url}>
            <Link 
              className={currentPath.includes(m.url) ? styles.active : undefined}
              to={`/${m.url}`}
            >
              {m.label}
            </Link>
          </li>)
        }
      </ul>
    </>
  )
}

export default Menu