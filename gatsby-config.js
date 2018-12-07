module.exports = {
  siteMetadata: {
    title: 'Martin Conde - Webdesign & Webdevelopment',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Martin Conde - Webdesign & Webdevelopment',
        short_name: 'martinconde',
        start_url: '/',
        background_color: '#93032e',
        theme_color: '#aeb4a9',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'psj0mst'
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
