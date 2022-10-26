import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'


const ContactPage = () => {
  return(
    <Layout pageTitle="Contact Me">
      <Sidebar />
      <Main>
        <p>Hi, this is the contact page</p>
      </Main>
    </Layout>
  )
}

export default ContactPage