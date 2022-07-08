import * as React from 'react'
import Layout from '../components/layout/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.apple.com.cn/iphone-13-pro/images/meta/wechat/iphone-13-pro_overview__b1vk24cp916q_og.png"
      />
    </Layout>
  )
}

export default IndexPage