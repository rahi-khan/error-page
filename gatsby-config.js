module.exports = {
    siteMetadata: {
        title: "Error Page",
        siteUrl: `https://error-page-69.netlify.app/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `Error Page`,
                short_name: `Error Page`,
                icon: `src/images/Scarecrow.png`,
                description: `Solution for a challenge from Devchallenges.io`,
                lang: `en`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
            },
        },
        "gatsby-plugin-offline",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
        },
    ],
};
