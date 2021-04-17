module.exports = {
    siteMetadata: {
        title: `A.S. Elections`,
        description: `Explore the policies of the candidates in the Associated Students elections.`,
        author: `web@dailynexus.com`,
        siteUrl: `http://dailynexus.com/aselections2021`,
        siteHomeUrl: `http://dailynexus.com`,
    },
    pathPrefix: `/aselections2021`,
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-csv`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
                useResolveUrlLoader: true,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `2020 A.S. Elections`,
                short_name: `2020as`,
                start_url: `/`,
                background_color: `#003660`,
                theme_color: `#003660`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
