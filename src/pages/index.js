import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Carousel } from "antd";

import CommunityBlock from "../components/CommunityBlock";

import { ImTwitter } from "react-icons/im";
import { DiGithubAlt } from "react-icons/di";
import { RiDiscordFill } from "react-icons/ri";
import SubstackSvg from "@site/static/img/Substack.svg";
import DiscordSvg from "@site/static/img/Discord_alt.svg";

import InfographicTrad from "@site/static/img/infographic__trad.png";
import InfographicDAO from "@site/static/img/infographic__dao.png";
import GraphicCommunities from "@site/static/img/bauhaus_communities.png";
import DaohausBauhaus from "@site/static/img/bauhaus__composable.png";
import DaohausHugeType from "@site/static/img/daohaus__hugeType.png";

import HowTreasury from "@site/static/img/how__treasury.png";
import HowProposals from "@site/static/img/how__proposals.png";
import HowMembers from "@site/static/img/how__members.png";

import IconA from "@site/static/img/ico-grants.png";
import IconB from "@site/static/img/ico-protocols.png";
import IconC from "@site/static/img/ico-guilds.png";
import IconD from "@site/static/img/ico-clubs.png";
import IconFA from "@site/static/img/ico__future--a.png";
import IconFB from "@site/static/img/ico__future--b.png";
import IconFC from "@site/static/img/ico__future--c.png";
import IconHA from "@site/static/img/ico__how--a.png";
import IconHB from "@site/static/img/ico__how--b.png";
import IconHC from "@site/static/img/ico__how--c.png";

import "../css/global.scss";
import "../css/home.scss";
import { heroSlides } from "../components/homeContent";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <div className="Home">
        <div className="HomeHero">
          <div className="SummonHero">
            <h1>
              Unlock the next tier <br />
              in community coordination
            </h1>
            <p className="BigP daoColor" style={{ maxWidth: "500px" }}>
              DAOs give direct <strong>power to the people</strong>. Join us in
              pioneering a future where magic internet communities unlock the
              power of human-centric coordination.
            </p>
            <p>
              Secured by the{" "}
              <a
                href="https://ethereum.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethereum
              </a>{" "}
              blockchain ❤️
            </p>
            <div className="Social">
              <a
                href="https://discord.gg/aDEsfJCQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordSvg />
              </a>
              <a
                href="https://daohaus.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SubstackSvg />
              </a>
              <a
                href="https://github.com/HausDAO/pokemol-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubAlt />
              </a>
              <a
                href="https://twitter.com/nowdaoit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTwitter />
              </a>
            </div>
            <div className="HeroButtonGroup">
              <a
                href="https://daohaus.club/docs"
                className="Button Big Secondary Outlined"
              >
                DAO Basics
              </a>
              <a
                href="https://app.daohaus.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="Button Big"
              >
                Open the App
              </a>
            </div>
          </div>
          <div className="Carousel">
            <Carousel
              autoplay={true}
              dots={false}
              effect="fade"
              autoplaySpeed={5000}
            >
              {heroSlides.map((slide) => {
                return (
                  <div key={slide.id} className="Carousel__Slide">
                    <div className="Content">
                      <p>{slide.content}</p>
                      <h4>{slide.heading}</h4>
                    </div>
                    <div
                      className="SlideBg"
                      style={{
                        backgroundImage: "url(" + slide.image + ")",
                      }}
                    />
                    <div className="Overlay">
                      <img
                        src={DaohausHugeType}
                        alt="daohaus type illustration"
                        width="50%"
                        style={{ position: "absolute", bottom: 25, right: 25 }}
                      />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <img
                  src={InfographicTrad}
                  alt="infographic trad"
                  width="240px"
                  style={{ marginBottom: 25 }}
                />
                <h5 className="tradColor">Traditional Organization</h5>
                <h2 style={{ textDecoration: "strikethrough" }}>
                  Power held by few at the top
                </h2>
                <p>
                  <span className="tradColor">
                    Rigid, Competition, Inequality, Opaque
                  </span>
                </p>
              </div>
              <div className="Column--50">
                <img
                  src={InfographicDAO}
                  alt="infographic dao"
                  width="240px"
                  style={{ marginBottom: 25 }}
                />
                <h5 className="daoColor">DAO</h5>
                <h2>Power shared by all</h2>
                <p>
                  <span className="daoColor">
                    Agile, Collaboration, Diversity, Transparent
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Usecases Block">
          <div className="Block__Contents">
            <h3>How is it Used?</h3>
            <p>
              How communities use DAOhaus{" "}
              <span className="daoColor">TODAY</span>
            </p>
            <div className="Row">
              <div className="Column--50">
                <img src={IconA} alt="" width="80px" />
                <h5>Grants & Investments</h5>
                <p>
                  The first major use of DAOs has been through community grants!
                  Millions have been raised and distributed to early developers
                  of this technology.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconB} alt="" width="80px" />
                <h5>Ventures</h5>
                <p>
                  The DAOhaus project is a prime example of a project based DAO.
                  Every community initiative can now become a funded reality.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconC} alt="" width="80px" />
                <h5>Guilds & Services</h5>
                <p>
                  Freelancers rejoice! Guilds have re-emerged as a powerful
                  collective force. Some even have members who quit their day
                  jobs to work for a DAO.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconD} alt="" width="80px" />
                <h5>Social</h5>
                <p>
                  Get your friends together and put your money where your mouth
                  is! Clubs are culture machines, and DAOhaus is flexible enough
                  to keep the party going.
                </p>
              </div>
            </div>
            <p style={{ marginTop: 75 }}>
              How communities will use DAOs{" "}
              <span className="yellowColor">TOMORROW</span>
            </p>
            <div className="Row">
              <div className="Column--33">
                <div className="Row AlignCenter JustifyStart">
                  <img
                    src={IconFA}
                    alt=""
                    width="40px"
                    style={{ marginRight: "10px" }}
                  />
                  <p>
                    Player-owned
                    <br />
                    <strong>Games</strong>
                  </p>
                </div>
              </div>
              <div className="Column--33">
                <div className="Row AlignCenter JustifyStart">
                  <img
                    src={IconFB}
                    alt=""
                    width="40px"
                    style={{ marginRight: "10px" }}
                  />
                  <p>
                    Brewer-owned
                    <br />
                    <strong>Breweries</strong>
                  </p>
                </div>
              </div>
              <div className="Column--33">
                <div className="Row AlignCenter JustifyStart">
                  <img
                    src={IconFC}
                    alt=""
                    width="40px"
                    style={{ marginRight: "10px" }}
                  />
                  <p>
                    User-owned
                    <br />
                    <strong>Platforms</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Block Communities">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h3>
                  We{" "}
                  <span role="img" aria-label="Love">
                    ❤️
                  </span>{" "}
                  Communities
                </h3>
                <p className="BigP">
                  DAOhaus communities have raised over $50M collectively and
                  distributed almost $20M throughout the ecosystem to support
                  their various goals.{" "}
                </p>
                <a
                  href="https://app.daohaus.club/explore"
                  className="Button Outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore DAOs
                </a>
              </div>
              <div className="Column--50">
                <img src={GraphicCommunities} alt="dao communities" />
              </div>
            </div>
          </div>
        </div>
        <div className="How Block">
          <div className="Block__Contents">
            <h3>How a DAO works</h3>
            <p>Just the basics.</p>
            <p className="TinyP">
              Learn more in our{" "}
              <a
                href="https://daohaus.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                help documentation
              </a>
              .
            </p>
            <div className="Row AlignCenter">
              <div className="Column--50">
                <img src={IconHA} alt="" width="40px" />
                <h5>Shared Treasury</h5>
                <p>
                  Community funds are held by the DAO itself and distributed
                  through Proposals.
                </p>
              </div>
              <div className="Column--50">
                <img src={HowTreasury} alt="app screenshot of treasury" />
              </div>
            </div>
            <div className="Row AlignCenter">
              <div className="Column--50">
                <img src={IconHB} alt="" width="40px" />
                <h5>Voting & Proposals</h5>
                <p>
                  Proposals can be used for all types of decisions like
                  distributing funds, allocating shares, and even interacting
                  with other applications and communities.
                </p>
              </div>
              <div className="Column--50">
                <img src={HowProposals} alt="app screenshot of proposals" />
              </div>
            </div>
            <div className="Row AlignCenter">
              <div className="Column--50">
                <img src={IconHC} alt="" width="40px" />
                <h5>Fluid Membership</h5>
                <p>
                  Members are added and removed through proposals and may leave
                  at any time. Shares allow for truly distributed ownership.
                </p>
              </div>
              <div className="Column--50">
                <img src={HowMembers} alt="app screenshot of members" />
              </div>
            </div>
          </div>
        </div>

        <div className="Block Communities">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h3>
                  Interact with the entire Ethereum ecosystem of decentralized
                  apps.
                </h3>
                <p className="BigP" style={{ margin: "25px 0px" }}>
                  Swap tokens on Uniswap... spin up a Gnosis Safe... govern your
                  own protocol... all as a community.
                </p>
                <p>
                  <strong>Collaborative composability ftw.</strong> If you’re
                  building something useful for DAOs, hit us up in our{" "}
                  <a
                    href="https://discord.gg/NPEJysW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="SocialIcon"
                  >
                    Discord ->
                  </a>
                </p>
              </div>
              <div className="Column--50">
                <img src={DaohausBauhaus} alt="ethereum ecosystem of dapps" />
              </div>
            </div>
          </div>
        </div>
        <CommunityBlock />
      </div>
    </Layout>
  );
}
