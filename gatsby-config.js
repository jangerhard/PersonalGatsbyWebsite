require('dotenv').config({
    path: `.env`
});

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
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
    ],
};