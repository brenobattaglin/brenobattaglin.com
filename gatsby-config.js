module.exports = {
  siteMetadata: {
    title: `Breno Battaglin`,
    name: `Breno Battaglin`,
    siteUrl: `https://https://brenobattaglin.com/`,
    description: `Personal blog by Breno Battaglin.`,
    hero: {
      heading: `Welcome to my personal blog.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/brenobattaglin`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/brenobattaglin`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/brenobattaglin`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
