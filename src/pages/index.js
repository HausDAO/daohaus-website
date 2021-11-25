import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Anchor, Card, Carousel, Row } from "antd";

import CommunityBlock from "../components/CommunityBlock";

import { ImTwitter } from "react-icons/im";
import { DiGithubAlt } from "react-icons/di";
import { RiDiscordFill } from "react-icons/ri";
import { IoIosGitPullReque } from "react-icons";
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
// import { heroSlides } from "../components/homeContent";
// import { Header } from "antd/lib/layout/layout";
// import CollapsePanel from "antd/lib/collapse/CollapsePanel";
// import { Column } from "rc-table";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="stateful.art : connecting cities with arts and rights"
    >
      <div className="Home">
        <div className="HomeHero">
          <div className="SummonHero">
            <h1 style={{ maxwidth: "660px" }}>
            you are creative and revolutionary. 
            </h1>

            <h1 style={{ maxwidth: "660px" }}>
              let's solve
              <a
                style={{ color: "red" }}
                href="https://www.interaction-design.org/literature/topics/wicked-problems"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                wicked <strong style={{ color: "yellow" }}> </strong>
                problems,<strong style={{ color: "green" }}> together. </strong>
              </a>

            </h1>

            {/* <h1>
              a brand new revolution, <br></br> as a service.
            </h1> */}

            {/* <h1>bypass autocracy in this metaverse.</h1> */}
            <p className="BigP " style={{ maxwidth: "660px" }}>
              <strong style={{ color: "white" }}>stateful</strong>
              <strong style={{ color: "yellow" }}>.</strong>
              <strong style={{ color: "red" }}>art </strong>
              is a post-structuralist and progressive art direction, at the
              realms of decentralized
              <a
                style={{ color: "white" }}
                href="https://en.wikipedia.org/wiki/Decentralization"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                governance
              </a>{" "}
              and{" "}
              <a
                style={{ color: "white" }}
                href="https://everipedia.org/wiki/lang_en/tokenomics-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                tokenomics.
              </a>
            </p>
            <h2>
              {" "}
              <strong> "an abstraction to reflect real life"</strong>{" "}
            </h2>
            <p
              className="BigP "
              style={{ marginTop: "10px", maxwidth: "660px" }}
            >
              in core of its tokenomics, project is utilising abstract
              phenomenons like $GENREs and $CAUSEs.
              <br></br>
              <br></br>
              to illustrate a metaversal solidarity, we'd like to initially
              suppy governance tokens for artistic & and soon for activist
              movements
            </p>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L0,32L49.7,32L49.7,288L99.3,288L99.3,288L149,288L149,160L198.6,160L198.6,128L248.3,128L248.3,288L297.9,288L297.9,128L347.6,128L347.6,96L397.2,96L397.2,192L446.9,192L446.9,256L496.6,256L496.6,288L546.2,288L546.2,96L595.9,96L595.9,96L645.5,96L645.5,64L695.2,64L695.2,192L744.8,192L744.8,32L794.5,32L794.5,96L844.1,96L844.1,128L893.8,128L893.8,160L943.4,160L943.4,64L993.1,64L993.1,288L1042.8,288L1042.8,64L1092.4,64L1092.4,0L1142.1,0L1142.1,32L1191.7,32L1191.7,256L1241.4,256L1241.4,160L1291,160L1291,224L1340.7,224L1340.7,192L1390.3,192L1390.3,288L1440,288L1440,0L1390.3,0L1390.3,0L1340.7,0L1340.7,0L1291,0L1291,0L1241.4,0L1241.4,0L1191.7,0L1191.7,0L1142.1,0L1142.1,0L1092.4,0L1092.4,0L1042.8,0L1042.8,0L993.1,0L993.1,0L943.4,0L943.4,0L893.8,0L893.8,0L844.1,0L844.1,0L794.5,0L794.5,0L744.8,0L744.8,0L695.2,0L695.2,0L645.5,0L645.5,0L595.9,0L595.9,0L546.2,0L546.2,0L496.6,0L496.6,0L446.9,0L446.9,0L397.2,0L397.2,0L347.6,0L347.6,0L297.9,0L297.9,0L248.3,0L248.3,0L198.6,0L198.6,0L149,0L149,0L99.3,0L99.3,0L49.7,0L49.7,0L0,0L0,0Z"></path></svg> */}

            <p className="BigP" maxwidth="660px">
              <strong style={{ color: "white" }}>st</strong>
              <strong style={{ color: "yellow" }}>.</strong>
              <strong style={{ color: "red" }}>art </strong>
              is advocating on direct participation of world residents on global
              matters, such as climate change, migration and global trade wars.
            </p>
            <h2>why so serious? </h2>

            {/* https://www.reuters.com/business/cop/cop26-final-hours-climate-negotiations-2021-11-12/ */}

            <p className="BigP" maxwidth="660px">
              lately, many states in the world had a hard time reflecting local
              and global societies' common will, rights and hopes.
            </p>
            <p className="BigP" maxwidth="660px">
              even if so, they do not go further and engage with citizens of
              other countries and in case their government is objecting with a
              critical .
            </p>

            <p className="BigP" maxwidth="660px">
              with this initiative project, simply inviting all to take global
              matters to residents of cities; with a notion, that is world
              citizenship.
            </p>

            <p className="BigP" maxwidth="660px">
              that would be one of those moves; as a way to bypass and
              #cancelAutocracy with help of those connected cities and mutually-inclusive autonomous empowerment zones between them.
            </p>

            <p className="BigP" maxwidth="660px">
              real life and online platforms are highly
              compartmentalized/siloed and this will be our metaversal solidarity.
            </p>

            <p className="BigP" maxwidth="660px">
            that's why project is about building a hub and exchanges of those new communities, their tokens and proposals for real and timely change, without fossil targets and conventions.
            </p>

               this

            {/* and starting this ultimate experiment with community-supported artist residencies, aka. artist-in-residency.  */}

            {/* 
            <p className="BigP " style={{ maxwidth: "500px" }}>
              initially, those universal basic experiences (ube) will be in the
              context of art residencies, aka. artist in residency.
            </p> */}

            {/* 
            <p className="BigP " style={{ maxwidth: "500px" }}>
              we are including art direction in scaling transparent and real-life-reflected governance and tokenomics. 
              mutually inclusive, art-empowered networks of cities that reflect their
              artistic and activist scenes.
            </p> */}

            {/* <p className="BigP " style={{ maxwidth: "500px" }}>
              and tools hopefully end up with every individual in the world
              having a stake in remote places, and feel empowered about their
              existence and impact on future, civic resolutions for global
              matters like climate change and migration.
            </p> */}

            {/* <p className="BigP " >
              START DAO and $START token initialised to .{" "}
            </p> */}

            <p className="BigP ">
              {/* <strong style={{ color: "white" }}>stateful</strong>
              <strong style={{ color: "yellow" }}>.</strong>
              <strong style={{ color: "red" }}>art </strong>
              contemplates and builds concepts to advocate and reflect real
              world in digital spaces, while aiming to solve wicked problems of
              our history, now and the future.
              <br></br> */}
              {/* 
           
              
              <br></br>
              hence for some matters, it is hoped to empower residents in those matters and hear what they (would) say.

              
              
              and experience democracy worldwide
              in different contexts, more directly and generously. */}
              {/*               
              it exists to bring up discussions and
              developments into how to build bridges between cities and
              residents of those cities, in a peer-to-peer or mesh-to-mesh
              fashion. expected migration or transformation, from
              a world of biases and impressions to a world of reflections and
              intentions. hence, on global matters, without any more fossil
              conventions to the future.. */}
              {/* is a post-structuralist, progressive decentralization & art direction in tokenomics and un/governance, for art-empowered cities. */}
            </p>

            {/* <p className="BigP " style={{ maxwidth: "500px" }}>
              <strong style={{ color: "white" }}>stateful</strong>
              <strong style={{ color: "yellow" }}>.</strong>
              <strong style={{ color: "red" }}>art </strong>
              without creating compartmentalized profit-driven siloes,
              rabbit-holes and profit-oriented solutions.
              </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              we tend to do it in an emancipatory and exploratory surfaces,
              dimensions and contexts as they appear in all communities.
            </p> */}
            {/* 
            <p className="BigP " style={{ maxwidth: "500px" }}>
              that are exploratory, progressive and creatively decentralised
              such as peace, knowledge and solidarity. it progressively builds
              artist and activist communities as (DAAOs) on blockchain.
            </p> */}

            {/* <p className="BigP " style={{ maxwidth: "500px" }}>
              project will extend Decentralised Autonomous Organisations (DAOs)
              progressive decentralised democracy. this time we will attempt to
              do this as we learned from the lessons from history of wars and
              peace.
            </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              project uses a real world, reflective perspective in namings of
              those tokens, tokenomics via ($GENREs, $) to build real world
              community tokens.
            </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              project to increase accessibility, sustainability and creativity
              of future solidarity networks.
            </p>
            <p className="BigP " style={{ maxwidth: "500px" }}>
              we need another climate convention with direct democracy, not
              delegation. with new collectively contemplates, designs, develops
              and explore new concepts within real world context and scenarios.
            </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              as an artwork itself, project is missioned to reflect what's out
              there, what is real. and without a limitation on positive, global
              impact. <br></br>
            </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              for that, it is an open-sourced, progressive decentralisation
              project on blockchain.
            </p> */}

            {/* <p className="BigP daoColor" style={{ maxwidth: "500px" }}>
              "don't get set into one form, adapt it and build your own, and let
              it grow, be like water."
            </p> */}
            <p className="BigP daoColor" style={{ maxwidth: "500px" }}>
              $START a revolution everyday, with love and peace.{" "}
            </p>

            <p className="BigP " style={{ maxwidth: "500px" }}>
              secured by the{" "}
              <a
                style={{ color: "pink" }}
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
                href="https://discord.gg/daohaus"
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
                href="https://github.com/stateful-art"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiGithubAlt />
              </a>
              <a
                href="https://twitter.com/statefulArt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTwitter />
              </a>
            </div>
            <div className="HeroButtonGroup">
              <a
                href="https://daohaus.club/docs"
                className="Button  Secondary Outlined"
              >
                DAAO
              </a>
              <a
                href="https://daohaus.club/docs"
                className="Button  Secondary Outlined"
              >
                DAAO
              </a>
              <a
                href="https://daohaus.club/docs"
                className="Button  Secondary Outlined"
              >
                DAAO
              </a>

              <a
                href="https://daohaus.club/docs"
                className="Button  Secondary Outlined"
              >
                NFT
              </a>
            </div>
          </div>

          <div className="SummonHero">
            <img
              style={{ maxwidth: "100%", maxHeight: "100%" }}
              src="./img/artwork_by_Ryn Shaparenko_wn799.svg"
            ></img>
            <img
              style={{ width: "80%", height: "20%", marginLeft: "10%"}}
              src="./img/orange_lines_overlapped.svg"
            ></img>
               <img
              style={{ width: "80%", height: "20%", marginLeft: "10%"}}
              src="./img/orange_lines_overlapped.svg"
            ></img>
            <img
              style={{ width: "80%", height: "20%", marginLeft: "10%" }}
              src="./img/orange_lines_overlapped.svg"
            ></img>
            {/* <img
              style={{ width: "80%", height: "20%"}}
              src="./img/orange_lines_overlapped.svg"
            ></img> */}
            {/* <img
              style={{ width: "80%", height: "20%", marginLeft: "10%" }}
              src="./img/orange_lines_overlapped.svg"
            ></img> */}
          </div>
        </div>
        <div>
          <div className="Block Video PrimaryDark">
            <div className="Block__Contents">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ textAlign: "left" }}></h2>
                {/* 
                <Row>
                  <Card>
                    asd
                  </Card>
                </Row> */}

                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ekFH6lz8GRc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/7jMlFXouPk8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <iframe
                    width="100%"
                    height="100%"
                  src="https://www.youtube.com/embed/x4vd21slhmw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}

                {/* 
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PfAWReBmxEs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}

                <p style={{ marginTop: "15px" }}>
                  A DAO explainer built by a DAO for DAOs funded by a DAO.
                  That's what DAOhaus is all about. The DAO 2 DAO economy and an
                  actual social network for the Metaverse.
                </p>
              </div>
            </div>
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
                <h5 className="tradColor">
                  still delegation system on global matters?
                </h5>
                <h2 style={{ textDecoration: "strikethrough" }}></h2>
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
                <h5 className="daoColor">Decentralised Autonomous Artist</h5>
                <h2>power, rights and hopes shared by all</h2>
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
              want to start an artistic or activist organisation?{" "}
              <span className="daoColor">TODAY</span>
            </p>
            <div className="Row">
              <div className="Column--50">
                <img src={IconA} alt="" width="80px" />
                <h5>universal basic experiences (ube)</h5>
                <p>experiences that we might use.</p>
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
                    href="https://discord.gg/daohaus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="SocialIcon"
                  >
                    Discord
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
