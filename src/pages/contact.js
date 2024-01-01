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
          <p className={styles.contentDesktop}>You can send me a message using the form below, or use the social media links in the sidebar.</p>
          <p className={styles.contentMobile}>You can send me a message using the form below, or use the social media links in the drop-down menu.</p>
          <div className={styles.formContainer}>

            <form name="contact" method="POST" action="/about" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

              <div className={styles.inputArea}>
                <input type="text" name="name" required/>
                <label>Your name</label>
              </div>
              <div className={styles.inputArea}>
                <input type="text" name="contact" required/>
                <label>How can I get back to you</label>
              </div>
              <div className={styles.inputArea}>
                <textarea type="message" required/>
                <label>Your message</label>
              </div>
              <button type="submit">Send</button>

              
              {/* <p>
                <label>Your Name: <input type="text" name="name" required/></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" required/></label>
              </p>
              <p>
                <label>Message: <textarea name="message" required></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p> */}
            </form>


          </div>

        </div>
      </Main>
    </Layout>
  )
}

export default ContactPage