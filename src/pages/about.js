import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'


const AboutPage = () => {
  return(
    <Layout pageTitle="About Me">
      <Sidebar />
      <Main>
        <p>Hi, this is the about page</p>
      </Main>
    </Layout>
  )
}

export default AboutPage