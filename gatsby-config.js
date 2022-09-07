module.exports = {
  siteMetadata: {
    title: `first gatsby site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `tba`,
    sidebarMenu: [
      {url: 'about', label: 'About'},
      {url: 'blog', label: 'Blog'},
      {url: 'contact', label: 'Contact'},
      {url: 'gallery', label: 'Gallery'},
    ],
    footer: {
      powered: `https://www.gatsbyjs.com`,
      inspired: `https://github.com/izackwu/gatsby-starter-breeze`,
      copyright: `https://github.com/dyx9`,
    },
    social: {
      email: `mailto:tba@tba.com`,
      github: `https://github.com/dyx9`,
      linkedin: `https://www.linkedin.com/in/dyx9/`,
      twitter: `https://twitter.com/yixuan_9`,
      telegram: `https://tba.com`,
    },
  },

  trailingSlash: "never",

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
