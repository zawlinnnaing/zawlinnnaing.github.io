require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
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
