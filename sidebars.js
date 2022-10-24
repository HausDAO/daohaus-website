module.exports = {
  mainSidebar: {
    "Developer Overview": ["devs/get-started", "devs/overview","devs/dev-subgraphs",],
    Concepts: ["devs/dev-proposals", "devs/treasury"],
    "DAOhaus App": [
      "devs/app-overview",
      {
        Boosts: [
          "devs/dev-boosts",
          "devs/dev-boosts-forms",
          "devs/dev-boosts-contracts",
          "devs/dev-boosts-tx",
        ],
      },
      {
        "Code Legos": [
          "devs/legos/tx-lego-api",
          "devs/legos/field-lego-api",
          "devs/legos/contract-lego-api",
          "devs/legos/form-lego-api",
        ],
      },

      {
        Advanced: [
          "devs/contexts",
          "devs/services",
          "devs/tx-polling",
          "devs/utilities",
        ],
      },
    ],
    Tutorials: [
      "devs/dev-quickstart",
      "devs/build-a-boost",
      "devs/publish-your-boost",
    ],
    "Contributing Guidelines": [
      "devs/goals-and-ideals",
      "devs/review-process",
      "devs/javascript",
      "devs/async-await",
      "devs/caching",
      "devs/react-structure",
      "devs/react-components",
      "devs/react-use-effect",
      "devs/react-jsx",
      "devs/react-layout",
    ],
  },
  howSidebar: {
    "User Docs Intro": [
      "users/intro",
      "users/intro-dao",
      "users/intro-why",
      "users/intro-moloch",
      "users/haus-token",
      "users/glossary",
    ],
    Features: [
      "users/hub",
      "users/treasury",
      "users/membership",
      "users/proposals",
      "users/profile",
      "users/minion",
    ],
    Tutorials: [
      "users/navigation",
      "users/summon",
      "users/add-member",
      "users/deploy-minion",
      "users/request-funding",
      "users/withdraw-internal",
      "users/weth",
      "users/networks",
      "users/manage-proposal-playlists",
      "users/rage-quit",
      "users/swap-tokens",
    ],
    Boosts: [
      "users/boosts/boosts",
      "users/boosts/installing-boosts",
      {
        type: "category",
        label: "Boosts Catalog",
        items: [
          "users/boosts/boost-catalog-format",
          "users/boosts/hedgey-boost",
          "users/boosts/disperse-boost",
          "users/boosts/rarible-boost",
          "users/boosts/dao-books-boost",
          "users/boosts/superfluid-boost",
          "users/boosts/wrap-n-zap-boost",
          "users/boosts/discourse-forum-boost",
          "users/boosts/discord-notifications-boost",
          "users/boosts/mintgate-boost",
          "users/boosts/nifty-ink-boost",
          "users/boosts/bank-buyout-boost",
          "users/boosts/nft-tribute-boost",
          "users/boosts/minion-dev-suite-v4-boost",
          "users/boosts/minion-dev-suite-v3-boost",
          "users/boosts/minion-dev-suite-v2-boost",
          "users/boosts/minion-dev-suite-v1-boost",
          "users/boosts/walletconnect-boost",
        ],
      },
      "users/boosts/building-boosts",
    ],
    FAQ: [
      "users/proposals-faq",
      "users/treasury-faq",
      "users/members-faq",
      "users/summoner-faq",
      "users/settings-faq",
      "users/boosts-faq",
      "users/profile-faq",
      "users/minion-faq",
      "users/other-networks-faq",
    ],
  },
  whoSidebar: {
    "Handbook Intro": [
      "handbook/who-we-are",
      "handbook/meeting-schedule",
      "handbook/resources",
    ],
    Discord: [
      "handbook/getting-started",
      //"handbook/level-up",
      "handbook/scholar",
      "handbook/supporter",
      "handbook/contributor",
      "handbook/summoner",
      "handbook/discord-faq",
      //"handbook/bots"
    ],
    Summoners: [
      "handbook/summoners/why-daos-summoners",
      {
        type: "category",
        label: "Features",
        items: [
          "handbook/summoners/summoners-daohaus-features",
          "handbook/summoners/uberhaus-governance",
          "handbook/summoners/cco",
        ],
      },
      {
        type: "category",
        label: "Tutorials",
        items: [
          "handbook/summoners/summoners-get-started",
          "handbook/summoners/summon-dao-gnosis",
          "handbook/summoners/uber-actions",
        ],
      },
      "handbook/summoners/summoners-best-practices",
      "handbook/summoners/summoners-faq",
    ],
    Contributors: [
      "handbook/contributors/contributors-get-started",
      "handbook/contributors/contributors-join-warcamp",
      {
        type: "category",
        label: "Rangers",
        items: [
          "handbook/contributors/contributors-docs",
          "handbook/contributors/contributors-docs-style-guide",
        ],
      },
      {
        type: "category",
        label: "Magesmiths",
        items: ["handbook/contributors/magesmiths-roadmap"],
      },
      {
        type: "category",
        label: "Compensation",
        items: [
          "handbook/contributors/contributors-comp-overview",
          "handbook/contributors/contributors-coordinape-overview",
          "handbook/contributors/contributors-comp-retro",
          "handbook/contributors/contributors-comp-commit",
          "handbook/contributors/contributors-earn-power",
          "handbook/contributors/contributors-comp-calendar",
        ],
      },

      "handbook/contributors/contributors-faq",
    ],
  },
};
``;
