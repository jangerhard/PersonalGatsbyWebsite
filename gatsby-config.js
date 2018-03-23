module.exports = {
    siteMetadata: {
        title: 'Jan Schøpp\s Personal Page',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-netlify`
    ],
};