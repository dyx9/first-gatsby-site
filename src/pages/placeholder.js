import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'


const Placeholder = () => {
  return(
    <Layout pageTitle="Placeholder">
      <Sidebar />
      <Main>
        <p>Hi, this is the Placeholder page</p>
      </Main>
    </Layout>
  )
}

export default Placeholder