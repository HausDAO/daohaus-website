module.exports = {
  title: "DAOhaus",
  tagline: "A place for all your DAOs",
  url: "https://docs.daohaus.club",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hausdao", // Usually your GitHub org/user name.
  projectName: "daohaus-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "DAOhaus Logo",
        src: "img/logo.png",
        srcDark: "img/logoDark.png",
      },
      items: [
        {
          to: "/",
          activeBasePath: "how",
          label: "Users",
          position: "left",
        },
        {
          to: "/docs",
          activeBasePath: "docs",
          label: "Developers",
          position: "left",
        },
        {
          href: "https://app.daohaus.club",
          label: "Launch App",
          position: "right",
        },
        {
          href: "https://github.com/HausDAO/daohaus-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Moloch",
          items: [
            {
              label: "Contracts",
              to: "/",
            },
            {
              label: "Subgraphs",
              to: "/subgraphs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/NPEJysW",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/nowdaoit",
            },
            {
              label: "Github",
              href: "https://github.com/HausDAO/pokemol-web",
            },
          ],
        },
        {
          title: "Go",
          items: [
            {
              label: "Launch DAOhaus",
              href: "https://app.daohaus.club",
            },
          ],
        },
      ],
      copyright: `Built by the community via HausDAO.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
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
};
