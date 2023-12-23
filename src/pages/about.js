import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'
import { Link } from 'gatsby'
import * as styles from './about.module.scss';


const AboutPage = () => {
  return(
    <Layout pageTitle="About Me">
      <Sidebar />
      <Main>
        <div className={styles.aboutContainer}>
          <p id={styles.lineOne}>About Me</p>
          <p>I'm still thinking about what should I put on this page, but I've left my resume below in case you're interested 🙂 </p>
          <div className={styles.resumeContainer}>
            <Link to='/'>resume</Link>
            <Link to='/'>简历</Link>
          </div>
        </div>

      </Main>
    </Layout>
  )
}

export default AboutPage