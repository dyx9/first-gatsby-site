import * as React from 'react'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <Sidebar />
            <p>Hi, this is the about page</p>
        </Layout>
    )
}

export default AboutPage