module.exports = {
  siteMetadata: {
    title: `first gatsby site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `tba`,
    footer: {
      powered: `https://www.gatsbyjs.com`,
      inspired: `https://github.com/izackwu/gatsby-starter-breeze`,
      copyright: `https://github.com/dyx9`,
    },
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: "solarized-light",
            },
          },
          
          `gatsby-remark-autolink-headers`,
        ],
      },
    },

  ],
}
