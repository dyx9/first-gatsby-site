import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'


const PortfolioPage = () => {
  return(
    <Layout pageTitle="Portfolio">
      <Sidebar />
      <Main>
        <p>Hi, this is the Portfolio page</p>
      </Main>
    </Layout>
  )
}

export default PortfolioPage