import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CommunityBlock from "../components/CommunityBlock";

import GraphicCommunities from "@site/static/img/bauhaus_communities.png";
import HausToken from "@site/static/img/haus_market.png";

import RaidAvatar from "@site/static/img/raidguild__avatar.png";
import YapAvatar from "@site/static/img/yap_avatar.jpg";
import LexAvatar from "@site/static/img/lex_avatar.jpg";

import "../css/global.scss";
import "../css/token.scss";

const Market = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Daohaus Docs: Learnin' and burnin'"
    >
      <div className="Home">
        <div className="Block PrimaryDark">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h1>
                  The HAUS Marketplace is coming <i>soon™️</i>
                </h1>
                <p className="BigP daoColor" style={{ maxWidth: "500px" }}>
                  With so many DAOs popping up as collectives that provide
                  services together, we're gonna need a marketplace to find each
                  other.
                </p>
                <div className="HeroButtonGroup">
                  <a
                    href="https://forms.clickup.com/f/83fyz-1328/HVGD4PGGSGBOYUYR2U"
                    className="Button Secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tell us about your Service DAO
                  </a>
                </div>
              </div>
              <div className="Column--50">
                <div style={{ textAlign: "center" }}>
                  <img style={{ margin: "0 auto" }} src={HausToken} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2 style={{ textDecoration: "strikethrough" }}>
                  Featured Service DAOs
                </h2>
                <p className="BigP">
                  Here are a few active Service DAOs, often referred to as
                  Guilds.
                </p>
              </div>
              <div className="Column--50"></div>
            </div>
            <div className="Row Farms">
              <div className="Column--50 DaoCard">
                <h3>
                  <img className="Avatar" src={YapAvatar} /> YAP DAO
                </h3>
                <p>
                  Decentralized collective of crypto-native PR experts with
                  worlds of experience in DeFi.
                </p>
                <p>
                  <a>Visit DAO</a>
                </p>
                <a
                  href="https://daohaus.club/docs/uber_actions"
                  className="Button Secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Engage
                </a>
              </div>
              <div className="Column--50 DaoCard">
                <h3>
                  <img className="Avatar" src={RaidAvatar} /> Raid Guild
                </h3>
                <p>
                  A decentralized collective of mercenaries ready to slay your
                  web3 product demons
                </p>
                <p>
                  <a
                    href="https://app.daohaus.club/dao/0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View the DAO
                  </a>
                </p>
                <a
                  href="https://hireus.raidguild.org/"
                  className="Button Secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Engage
                </a>
              </div>
              <div className="Column--50 DaoCard">
                <h3>
                  <img className="Avatar" src={LexAvatar} /> LEX DAO
                </h3>
                <p>The Decentralized Legal Engineering Guild</p>
                <p>
                  <a
                    href="https://app.daohaus.club/dao/0x64/0x58234d4bf7a83693dc0815d97189ed7d188f6981/proposals"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit DAO
                  </a>
                </p>
                <a
                  href="https://lexdao.coop"
                  className="Button Secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Engage
                </a>
              </div>
              <div className="Column--50 DaoCard">
                <h3>
                  <img className="Avatar" src={RaidAvatar} /> Splainer DAO
                </h3>
                <p>We make badass Video Explainers</p>
                <p>
                  <a
                    href="https://app.daohaus.club/dao/0x64/0xad80fbdb9c9652b5238dbd1dc4b4c7f7c364dba7"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit DAO
                  </a>
                </p>
                <a
                  href="https://daohaus.club/docs/uber_actions"
                  className="Button Secondary"
                >
                  Engage
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h5>Join the Ranks</h5>
                <h3>Become a Service DAO</h3>
                <p className="BigP">
                  Lots of DAOs are collectives offering services, so we're
                  looking to build out more tools to empower these types of
                  organizations to do more together. If you have a DAO that
                  offers services, or are thinking of starting a new one, submit
                  your DAO below to get early access to the marketplace.
                </p>
                <div className="ButtonGroup">
                  <a
                    href="https://forms.clickup.com/f/83fyz-1328/HVGD4PGGSGBOYUYR2U"
                    className="Button Outlined"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit your DAO
                  </a>
                </div>
              </div>
              <div className="Column--50">
                <img src={GraphicCommunities} alt="dao communities" />
              </div>
            </div>
          </div>
        </div>
        <CommunityBlock />
      </div>
    </Layout>
  );
};

export default Market;
