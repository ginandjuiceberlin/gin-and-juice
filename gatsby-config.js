module.exports = {
  siteMetadata: {
    title: `Gin & Juice | Bodega Berlin`,
    description: `Bodega Berlin - fashion & treats presents Gin & Juice. Start experience and submit your email to keep up with updates. Check our spotify and instagram accounts.`,
    author: `Milos Mladenovic`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-dts-css-modules",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gin & Juice | Bodega Berlin`,
        short_name: `Gin & Juice`,
        start_url: `/`,
        background_color: `#e88ff8`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#e88ff8`,
        display: `minimal-ui`,
        icon: `src/images/bblogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", ".cache", "public"],
        stages: ["develop"],
        emitWarning: true,
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Varela Round`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
