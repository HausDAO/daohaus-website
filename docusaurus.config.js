module.exports = {
  title: "st.art",
  tagline: "A place for all your DAOs",
  url: "https://daohaus.club",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hausdao", // Usually your GitHub org/user name.
  projectName: "daohaus-docs", // Usually your repo name.
    scripts: [{src: 'https://plausible.io/js/plausible.js', async: true, defer: true, 'data-domain': 'daohaus.club'}],
  themeConfig: {
    image: "https://daohaus.club/images/daohaus-main.jpg",
    metadatas: [
      { name: "og:type", content: "website" },
      {
        name: "og:description",
        content: "Stateful is an .",
      },
      { name: "og:site_name", content: "stateful.art" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nowdaoit" },
      { name: "twitter:title", content: "stateful.art" },
      {
        name: "twitter:description",
        content: "DAOhaus is a no code platform for Moloch DAOs.",
      },
      {
        name: "twitter:image",
        content: "https://daohaus.club/images/daohaus-main.jpg",
      },
    ],
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: "stateful_art_textual_logo",
        src: "img/logo_textual.png",
        srcDark: "img/logo_textual.png",
      },
      items: [
        {
          to: "/community",
          activeBasePath: "community",
          label: "DAAO",
          position: "right",
        },

        {
          label: "token fams",
          position: "right",
          items: [
            {
              label: "$GENRE",
              to: "/docs",
            },
            {
              label: "$CAUSE",
              to: "/docs/devs",
            },
            {
              label: "$NEED",
              to: "/docs/handbook",
            },
            {
              label: "$SKILL",
              to: "/docs/handbook",
            },
            {
              label: "Handbook",
              to: "/docs/handbook",
            }
          ],
        },


        // {
        //   to: "/token",
        //   activeBasePath: "token",
        //   label: "$GENRE",
        //   position: "right",
        // },
        // {
        //   to: "/token", 
        //   activeBasePath: "token",
        //   label: "$IMPACT",
        //   position: "right",
        // },
        {
          to: "/market",
          activeBasePath: "market",
          label: "Marketplace",
          position: "right",
        },
        {
          label: "Links",
          position: "right",
          items: [
            {
              label: "design principles",
              to: "/docs",
            },
            {
              label: "Developers",
              to: "/docs/devs",
            },
            {
              label: "Handbook",
              to: "/docs/handbook",
            }
          ],
        },
        {
          href: "https://app.daohaus.club",
          label: "Open App",
          position: "right",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     items: [
      //       {
      //         label: "Launch the App",
      //         href: "https://app.daohaus.club",
      //       },
      //       {
      //         label: "Explore DAOs",
      //         href: "https://app.daohaus.club/explore",
      //       },
      //       {
      //         label: "Summon a DAO",
      //         href: "https://app.daohaus.club/summon",
      //       },
      //       {
      //         to: "/docs",
      //         label: "User Docs",
      //       },
      //       {
      //         to: "/docs/devs",
      //         label: "Developer Docs",
      //       },
      //       {
      //         to: "/docs/handbook",
      //         label: "Handbook",
      //       }
      //     ],
      //   },
      //   {
      //     items: [
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/nowdaoit",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discord.gg/daohaus",
      //       },
      //       {
      //         label: "Substack",
      //         href: "https://daohaus.substack.com/",
      //       },
      //       {
      //         label: "Github",
      //         href: "https://github.com/HausDAO/pokemol-web",
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: "HAUS logo",
        src: "img/logo.png",
      },
      copyright: `built by hearts and minds, that minds.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/HausDAO/daohaus-website/edit/staging",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/HausDAO/daohaus-website/edit/staging/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
