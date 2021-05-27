module.exports = {
  title: "DAOhaus",
  tagline: "A place for all your DAOs",
  url: "https://daohaus.club/docs",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hausdao", // Usually your GitHub org/user name.
  projectName: "daohaus-docs", // Usually your repo name.
  themeConfig: { 
    image: 'https://daohaus.club/images/daohaus-main.jpg',
    metadatas: [
      {name: 'og:type', content: 'website'},
      {name: 'og:description', content: 'DAOhaus is a no code platform for Moloch DAOs.'},
      {name: 'og:site_name', content: 'DAOhaus'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@nowdaoit'},
      {name: 'twitter:title', content: 'DAOhaus'},
      {name: 'twitter:description', content: 'DAOhaus is a no code platform for Moloch DAOs.'},
      {name: 'twitter:image', content: 'https://daohaus.club/images/daohaus-main.jpg'}
    ],
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: "DAOhaus Logo",
        src: "img/logo.png",
        srcDark: "img/logoDark.png",
      },
      items: [
        {
          to: "/community",
          activeBasePath: "community",
          label: "Community",
          position: "right",
        },
        {
          to: "/token",
          activeBasePath: "token",
          label: "Token",
          position: "right",
        },
        {
          href: "https://app.daohaus.club/explore",
          label: "Explore DAOs",
          position: "right",
        },
        {
          href: "https://app.daohaus.club/summon",
          label: "Summon a DAO",
          position: "right",
        },
        {
          label: "Docs",
          position: "right",
          items: [
            {
              label: "Users",
              to: "/docs",
            },
            {
              label: "Developers",
              to: "/docs/devs",
            },
          ],
        },
        {
          href: "https://app.daohaus.club",
          label: "Launch App",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: "Launch the App",
              href: "https://app.daohaus.club",
            },
            {
              label: "Explore DAOs",
              href: "https://app.daohaus.club/explore",
            },
            {
              label: "Summon a DAO",
              href: "https://app.daohaus.club/summon",
            },
            {
              to: "/docs",
              label: "User Docs",
            },
            {
              to: "/docs/devs",
              label: "Developer Docs",
            },
          ],
        },
        {
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/nowdaoit",
            },
            {
              label: "Discord",
              href: "https://discord.gg/daohaus",
            },
            {
              label: "Substack",
              href: "https://daohaus.substack.com/",
            },
            {
              label: "Github",
              href: "https://github.com/HausDAO/pokemol-web",
            },
          ],
        },
      ],
      logo: {
        alt: "HAUS logo",
        src: "img/logo.png",
      },
      copyright: `Built by the community via HausDAO.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/HausDAO/daohaus-docs/edit/prod/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/HausDAO/daohaus-docs/edit/prod/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
