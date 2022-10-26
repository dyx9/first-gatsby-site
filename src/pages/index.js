import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Main from '../components/layout/main'


const IndexPage = ({ data }) => {

  return (
    <Layout pageTitle="Home Page">
      <Sidebar />
      <Main>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://www.apple.com.cn/iphone-13-pro/images/meta/wechat/iphone-13-pro_overview__b1vk24cp916q_og.png"
        />
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 2000) {
      nodes {
        slug
      }
    }
  }

`

export default IndexPage