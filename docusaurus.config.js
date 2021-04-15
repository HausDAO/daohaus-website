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
          to: "/token",
          activeBasePath: "token",
          label: "Token",
          position: "right",
        },
        {
          to: "/community",
          activeBasePath: "community",
          label: "Community",
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
      style: "dark",
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
              label: "DAO Basics",
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
              href: "https://discord.gg/NPEJysW",
            },
            {
              label: "Suibstack",
              href: "https://daohaus.substack.com/",
            },
            {
              label: "Github",
              href: "https://github.com/HausDAO/pokemol-web",
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
