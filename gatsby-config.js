module.exports = {
  siteMetadata: {
    title: `first gatsby site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `tba`,
    sidebarMenu: [
      {url: 'about', label: 'About'},
      {url: 'blog', label: 'Blog'},
      {url: 'portfolio', label: 'Portfolio'},
      {url: 'contact', label: 'Contact'},
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

  // trailingSlash: "never",

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
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

    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `test-xkknkcsy8b`
      }
  },

    // {
    //   resolve: `gatsby-plugin-gitalk`,
    //   options: {
    //     config: {
    //       clientID: '53bcef2583830fdaf1eb',
    //       clientSecret: '269c485c8a91a27c66d6e4847381a43ba0aa162e',
    //       repo: 'first-gatsby-site',
    //       owner: 'dyx9',
    //       admin: ['dyx9'],
    //       createIssueManually: true,
    //       distractionFreeMode: false
    //     }
    //   }
    // },

  ],
}
