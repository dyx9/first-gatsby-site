import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'
import * as styles from './contact.module.scss';


const ContactPage = () => {
  return(
    <Layout pageTitle="Contact Me">
      <Sidebar />
      <Main>
        <div className={styles.contactContainer}>
            <p id={styles.lineOne}>Let's Talk</p>
            <p>I plan to build a form that you can send a message to me directly from this page, but for now, feel free to use social media links from the sidebar (or the drop-down menu if you're visiting this page from a mobile device) </p>
          </div>
      </Main>
    </Layout>
  )
}

export default ContactPage