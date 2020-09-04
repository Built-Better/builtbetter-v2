module.exports = {
  siteMetadata: {
    title: `Built Better Technology`,
    description: `Official website of Built Better Technology`,
    author: `@builtbetter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172965958-1",
        head: true,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://tech.us17.list-manage.com/subscribe/post?u=9e41c0fa85b5318e372a75388&amp;id=de831baadb", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // Building Blocks GraphQL config
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "BBSchema",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "bbschema",
        // Url to query from
        url: "https://www.buildingblockscms.tech/graphiql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "x-auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzgxMmQ0MTc3YmQ0NWJjNDQ0OGJkYyIsImlhdCI6MTU5NzUxMDQ1M30.Blr2t1CL_rpxZXK3ZnqEDVKk3t5wuKVrQPmW6XqR3_c`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `built-better-technology-web-template`,
        short_name: `builtbetter-web-template`,
        start_url: `/`,
        icon: `src/images/bbt_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
