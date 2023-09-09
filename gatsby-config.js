require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import("gatsby").GatsbyConfig}
 */
const config = {
  siteMetadata: {
    siteUrl: "https://zawlinnnaing.ml",
    title: "zawlinnnaing",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#10b981",
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-YJMWXGMMH3"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "notion-source-plugin",
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/locales`,
    //     name: `locale`,
    //   },
    //   __key: "locale",
    // },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: ["en", "zh", "my", "my_zg"],
    //     defaultLanguage: "en",
    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: "https://zawlinnnaing.ml/",
    //     // you can pass any i18next options
    //     // pass following options to allow message content as a key
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },

    //       fallbackLng: "en",

    //       defaultNS: "default",

    //       debug: true,
    //     },
    //   },
    // },
  ],
};

module.exports = config;
