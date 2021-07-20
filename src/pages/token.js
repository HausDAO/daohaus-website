import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CommunityBlock from "../components/CommunityBlock";

import GraphicCommunities from "@site/static/img/haus_genesis-council.png";
import HausToken from "@site/static/img/haus__icon.png";

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
import "../css/token.scss";

const Token = () => {
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
                <h1>The HAUS token aligns all DAOs on the platform</h1>
                <p className="BigP daoColor" style={{ maxWidth: "500px" }}>
                  As we create more value together, that value flows back to the
                  HAUS token, shared by all communities on the platform.
                </p>
                <div className="HeroButtonGroup">
                  <a
                    href="https://medium.com/daohaus-club/haus-launch-bd781bbbf13a"
                    className="Button Big Secondary Outlined"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Read the Launch Article
                  </a>
                  <a
                    href="https://swapr.eth.link/#/swap?outputCurrency=0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Button Big Secondary"
                  >
                    Get HAUS
                  </a>
                </div>
              </div>
              <div className="Column--50">
                <a
                  href="https://www.coingecko.com/en/coins/daohaus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div style={{ textAlign: "center" }}>
                    <img style={{ margin: "0 auto" }} src={HausToken} alt="" />
                  </div>
                  <p style={{ textAlign: "center" }}>View HAUS on CoinGecko</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2 style={{ textDecoration: "strikethrough" }}>
                  DXdao x DAOhaus
                </h2>
                <p className="BigP">
                  <a
                    href="https://dxdao.eth.link/#/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    DXdao
                  </a>{" "}
                  has teamed up with HAUS to offer DXD and wETH rewards in their
                  HAUS/wETH pool on Swapr.
                </p>
                <a
                  href="https://swapr.eth.link/#/swap?outputCurrency=0xb0c5f3100a4d9d9532a4cfd68c55f1ae8da987eb"
                  className="Button Secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get HAUS on Swapr
                </a>
              </div>
              <div className="Column--50"></div>
            </div>
            <div className="Row Farms">
              <div className="Column--33">
                <h2>1. Become an LP</h2>
                <p>Provide liquidity on the HAUS/wETH pool on Swapr</p>
                <p>
                  <i>Signal governance with Snapshot</i>
                </p>
                <a
                  href="https://swapr.eth.link/#/pools/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/0xb0C5f3100A4d9d9532a4CfD68c55F1AE8da987Eb/0xB145FBA04C22CA35c2Dca96E6CBa2Ec2d7a71Ec8"
                  className="Button Secondary Outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add Liquidity
                </a>
              </div>
              <div className="Column--33">
                <h3>2. Stake on Swapr</h3>
                <p>
                  Stake your LP tokens to earn both DXD and WETH as rewards.
                </p>
                <p>
                  <i>Signal governance with Snapshot</i>
                </p>
                <a
                  href="https://swapr.eth.link/#/pools/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/0xb0C5f3100A4d9d9532a4CfD68c55F1AE8da987Eb/0xB145FBA04C22CA35c2Dca96E6CBa2Ec2d7a71Ec8"
                  className="Button Secondary Outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Staking Rewards
                </a>
              </div>
              <div className="Column--33">
                <h3>3. Clan</h3>
                <p>Stake HAUS as a DAO into UberHaus and earn 3x rewards</p>
                <p>
                  <i>Direct governance through UberHaus</i>
                </p>
                <a
                  href="https://daohaus.club/docs/uber_actions"
                  className="Button Secondary Outlined"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Usecases Block">
          <div className="Block__Contents">
            <h3>What is HAUS used for?</h3>
            <p>
              How HAUS is used <span className="daoColor">TODAY</span>
            </p>
            <div className="Row">
              <div className="Column--50">
                <img src={IconA} alt="" width="80px" />
                <h5>Governance</h5>
                <p>
                  Define, direct, and build the product for and with the
                  community. Also supports sustainable governance over the HAUS
                  token and its issuance.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconB} alt="" width="80px" />
                <h5>Access</h5>
                <p>
                  Get priority support and alpha access to new features on
                  DAOhaus
                </p>
              </div>
              <div className="Column--50">
                <img src={IconC} alt="" width="80px" />
                <h5>Rewards</h5>
                <p>
                  Earn rewards by providing liquidity to the community to build
                  more value into the platform.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconD} alt="" width="80px" />
                <h5>Discounts</h5>
                <p>
                  Get discounts on advanced or custom features by paying with
                  HAUS.
                </p>
              </div>
            </div>
            <p style={{ marginTop: 75 }}>
              How HAUS will be used{" "}
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
                    Self-organized
                    <br />
                    <strong>User Union</strong>
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
                    Curated DAO
                    <br />
                    <strong>Index Fund</strong>
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
                    Seed Early
                    <br />
                    <strong>Communities</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h5>Hello Meta Governance</h5>
                <h3>UberHaus</h3>
                <p className="BigP">
                  UberHaus is the DAO that governs the DAOhaus product as well
                  as the HAUS token. As DAOhaus is a platform for communities,
                  there are no individual members, only the communities
                  themselves. Any DAO can stake some HAUS and elect a delegate
                  to represent them in UberHaus governance proposals.
                </p>
                <div className="ButtonGroup">
                  <a
                    href="http://localhost:3000/docs/users/uberhaus-governance"
                    className="Button Outlined"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More about UberHaus
                  </a>
                </div>
              </div>
              <div className="Column--50">
                <img src={GraphicCommunities} alt="dao communities" />
              </div>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <h3>How HAUS governance works</h3>
            <p>Just the basics, more to come.</p>
            <div className="Row">
              <div className="Column--33" style={{ marginTop: 75 }}>
                <img src={IconHA} alt="" width="40px" />
                <h5>1. Discuss</h5>
                <p>
                  Discuss new directions and features for the product or new
                  use-cases and strategies for the HAUS token itself.
                </p>
                {/* <a
                className="Button Outlined"
                href="discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on Discord
              </a> */}
              </div>
              <div className="Column--33" style={{ marginTop: 75 }}>
                <img src={IconHB} alt="" width="40px" />
                <h5>2. Propose</h5>
                <p>
                  Anyone can submit a proposal to the DAO. We can also collect
                  signal from all tokenholders via Snapshot to help inform our
                  path.
                </p>
              </div>
              <div className="Column--33" style={{ marginTop: 75 }}>
                <img src={IconHC} alt="" width="40px" />
                <h5>3. Vote</h5>
                <p>
                  The Member DAOs vote directly on these proposals, governing
                  the platform themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CommunityBlock />
      </div>
    </Layout>
  );
};

export default Token;
