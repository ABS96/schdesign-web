module.exports = {
  siteMetadata: {
    title: 'Schönherz Design Stúdió',
    description: 'A Simonyi Károly Szakkollégium kreatív alkotóműhelye.',
    language: 'hu',
    email: 'hello@schdesign.hu',
    siteBehanceURL: 'https://www.behance.net/wearethesds/',
    siteFacebookURL: 'https://www.facebook.com/schonherzdesignstudio/',
    siteInstagramURL: 'https://www.instagram.com/schdesign.hu/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Schönherz Design Stúdió',
        short_name: 'schdesign',
        start_url: '/',
        background_color: '#3d3d3d',
        theme_color: '#f8485e',
        display: 'standalone',
        icon: 'src/assets/favicon.png',
        legacy: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
