module.exports = {
  siteMetadata: {
    siteUrl: 'http://wordic.cholewa.cloud:91',
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    }
  ],
};
