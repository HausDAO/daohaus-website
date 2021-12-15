import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HeroReview from "@site/static/img/hero_review.jpg";
import HausCommProduct from "@site/static/img/haus_communityproduct.png";
import EthCC from "@site/static/img/review/irl_paris.jpg";
import MCON from "@site/static/img/review/irl_mcon.png";
import NFTNYC from "@site/static/img/review/irl_nftnyc.png";

import LogoUberHaus from "@site/static/img/review/logo_uberhaus.png";
import Warcamp from "@site/static/img/review/warcamp.png";
import HPPoaps from "@site/static/img/review/hausparty_poaps.png";
import PoolHaus from "@site/static/img/review/poolhaus-genesis-poap.png";
import Foundations from "@site/static/img/review/foundations.png";
import Wargames from "@site/static/img/review/wargames.png";

import HeroCommunity from "@site/static/img/review/hero_community.png";
import HeroProduct from "@site/static/img/review/hero_product.png";
import HeroNumbers from "@site/static/img/review/hero_numbers.png";

import Integrations from "@site/static/img/review/haus_integrations.png";
import ChartMinions from "@site/static/img/review/chart_minions.png";
import ChartBoosts from "@site/static/img/review/chart_boosts.png";
import ChartDaos from "@site/static/img/review/chart_daos-summoned.png";
import ChartDaosNetwork from "@site/static/img/review/chart_daos-network.png";
import ChartDaosMembers from "@site/static/img/review/chart_daos-members.png";
import ChartDaosProposals from "@site/static/img/review/chart_daos-proposals.png";
import ChartFlow from "@site/static/img/review/chart_flow.png";
import ChartMonthly from "@site/static/img/review/chart_monthly-outflows.png";

import LogoDAOBooks from "@site/static/img/review/logo_daobooks.png";
import LogoRarible from "@site/static/img/review/logo_rarible.png";
import LogoDisperse from "@site/static/img/review/logo_disperse.png";

import "../css/global.scss";
import "../css/community.scss";
import "../css/review.scss";

const Review = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Daohaus Docs: Learnin' and burnin'"
    >
      <div className="Review">
        <div
          className="Block PrimaryDark HeroReview"
          style={{ backgroundImage: "url(" + HeroReview + ")" }}
        >
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h1>
                  <strong>DAOHAUS</strong>
                </h1>
                <h2>2021 Year in Review</h2>
              </div>
              <div className="Column--50">
                <p> </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryDark">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2>DAOHAUS</h2>
                <p className="BigP">
                  2021 has been amazing for DAOhaus We saw tremendous growth in
                  our community, ecosystem & product. As we look towards 2022,
                  we’d like to recount what happened in 2021 and re-introduce
                  DAOhaus to our community (new and old).
                </p>
                <p className="BigP">
                  At its core, the DAOhaus platform is the easiest way for
                  individuals to start a DAO and help their communities
                  coordinate to achieve shared goals. However, what makes us
                  special is the mission-driven communities that use, build and
                  advocates DAOhaus & the values we live by.
                </p>
              </div>
              <div className="Column--50">
                <img src={HausCommProduct} alt="" />
                <p className="yellowColor BigP" style={{ textAlign: "center" }}>
                  <a href="#community">1. Community First</a>
                </p>
                <p className="yellowColor BigP" style={{ textAlign: "center" }}>
                  <a href="#product">2. Product Updates</a>
                </p>
                <p className="yellowColor BigP" style={{ textAlign: "center" }}>
                  <a href="#numbers">3. By the Numbers</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="Block PrimaryBg SubHero"
          style={{ backgroundImage: "url(" + HeroCommunity + ")" }}
          id="community"
        >
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column">
                <h2>Community First</h2>
                <p className="BigP">
                  While creating great software is what we do at DAOhaus, the
                  true magic is not in the app screens, code or smart contracts.
                  It's in the purpose-driven communities and the interactions
                  between these communities.
                </p>
                <p className="BigP">
                  When you use DAOhaus, you don’t just get software with great
                  features. You get access to an ecosystem of partners, service
                  providers, grants and investors. You find your tribe of people
                  to experiment and solve the same issues with.{" "}
                  <strong>
                    You can own, build and govern DAOhaus with the rest of us.
                  </strong>
                </p>
              </div>
              <div className="Column--50"></div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryDark">
          <div className="Block__Contents">
            <div className="Row">
              <h2>2021 IRL</h2>
            </div>
            <div className="Row">
              <div className="Column--33">
                <h4>EthCC</h4>
                <h6>Paris w/MetaCartel & Frens</h6>
                <img src={EthCC} />
              </div>
              <div className="Column--33">
                <h4>MCON</h4>
                <h6>DAO Circle in Denver</h6>
                <img src={MCON} />
              </div>
              <div className="Column--33">
                <h4>NFT.NYC</h4>
                <h6>
                  <i>DAOhaus Ad</i> in MetaFactory Newspaper
                </h6>
                <img src={NFTNYC} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>UberHaus</h3>
                <p>
                  UberHaus is the DAO of 70+ DAOs that governs the DAOhaus
                  platform and a treasury of $HAUS, the native token of the
                  DAOhaus ecosystem. Instead of centralized core teams, inner
                  circles, and opaque decision making processes,{" "}
                  <strong>we are truly community-owned and governed</strong>.
                  Working together, UberHaus aims to build more tooling,
                  strengthen DAO2DAO interactions and further the adoption of
                  decentralized and digital coordination practices.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Warcamp</h3>
                <p>
                  On behalf of UberHaus,{" "}
                  <strong>
                    the DAOhaus platform is managed by Warcamp DAO
                  </strong>
                  , a team of 40+ (and growing) core contributors with different
                  skill sets, time zones, and bandwidth availability. Each
                  contributor is a member of one or more Circles, or functional
                  working groups, underneath the Warcamp umbrella.
                </p>
              </div>
              <div className="Column--50">
                <img src={Warcamp} className="reviewImg" />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>PoolHaus</h3>
                <p>
                  PoolHAUS is our on-going experiment to promote sustainable &
                  incentives-aligned $HAUS liquidity through a DAO made up of
                  liquidity providers.{" "}
                  <strong>
                    Our first iteration doubled our initial goal of $500k and
                    created $1M in liquidity on xDAI
                  </strong>
                  . In our next evolution,{" "}
                  <strong>
                    we will soon bring PoolHAUS to Ethereum Mainnet
                  </strong>
                  with the aim of $3M+ in liquidity. Currently, PoolHAUS is 55
                  members strong, and we welcome any $HAUS holders to come
                  before the launch of our next liquidity raise.
                </p>
              </div>
              <div className="Column--50">
                <img src={PoolHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>HausParty</h3>
                <p>
                  HAUS Party is where we hang out every week on Discord to
                  listen to community stewards, builders and Web 3 experts share
                  their stories and learnings. With Felipe taking over as the
                  HAUS Party host from Kerp, we have had{" "}
                  <strong>
                    more than 30 authentic and insightful sessions this year
                  </strong>
                  . Here’s a snapshot of all the POAPs given out during the HAUS
                  Parties in 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={HPPoaps} className="reviewImg" />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Wargames</h3>
                <p>
                  As an experiment, HAUS Party attendees with POAPs were added
                  into a DAO where they were given equal shares. Some amount of
                  RAID and HAUS token were airdropped into the DAOs treasury,
                  when the members were given two options: Members could claim
                  their rewards and leave with less than their fair share, or
                  Members could abstain from claiming and vote on the proposal
                  to take control of the DAO down. WarGames is an ongoing
                  experience where Attendees of the HausParty can possibly come
                  and earn some HAUS!
                </p>
              </div>
              <div className="Column--50">
                <img src={Wargames} className="reviewImg" />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Foundations DAO</h3>
                <p>
                  Onboarding into a DAO should be fun, so we created Foundations
                  to help people learn about DAOs through taking action. In
                  collaboration with{" "}
                  <a
                    href="https://app.rabbithole.gg/quests/daohaus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rabbithole
                  </a>
                  , we onboarded 3,000 members on FoundationsDAO in 2 months.
                  This was one of the most viral introductions of a DAO to
                  newcomers in the history of DAOhaus, and created one of the
                  largest DAOs on DAOhaus.
                </p>
              </div>
              <div className="Column--50">
                <img src={Foundations} className="reviewImg" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="Block PrimaryBg SubHero"
          style={{ backgroundImage: "url(" + HeroProduct + ")" }}
          id="product"
        >
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column">
                <h2>Product Updates</h2>
                <p className="BigP">
                  DAOhaus offers an expansive ecosystem for folks to come build
                  products, experiment, and join in participatory ownership over
                  shared resources.
                </p>
              </div>
              <div className="Column--50"></div>
            </div>
            <div className="Row PadRow">
              <img
                src={Integrations}
                style={{ maxWidth: "100%", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Minions</h3>
                <p>
                  <strong>
                    Minions enable DAOs to interact with external smart
                    contracts and protocols
                  </strong>{" "}
                  like NFTs, DeFi, or even other DAOs.
                </p>
                <p>
                  We’ve launched Minions V2 and V3 this year, enabling a bunch
                  of powerful new features like quorum voting, early execution,
                  and fund forwarding. Partnering with Gnosis, we’ve also
                  launched the Safe Minion, so your Minion funds are stored
                  safely in a Gnosis Safe.
                </p>
                <p>
                  In 2021,{" "}
                  <strong>DAOs installed a total of 900 Minions</strong>, most
                  of which were the Vanilla Minion.
                </p>
                <p>
                  The fastest growing Minion is the Safe Minion, hitting 206
                  installations despite being only 3 months old.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartMinions} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Boosts</h3>
                <p>
                  <strong>
                    In 2021, we launched the Boost Marketplace, the best place
                    to find Boosts to help your DAO run more effectively.
                  </strong>{" "}
                  30% of all DAOhaus DAOs have installed at least 1 Boost.
                </p>
                <p>
                  Discord Notifications Boost is the most installed, followed by
                  Wrap N Zap and the Discourse Forum Boost.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartBoosts} />
              </div>
            </div>

            <div className="Row BoostPadRow">
              <div className="Column--33">
                <img
                  src={LogoDAOBooks}
                  style={{ maxHeight: "40px" }}
                  alt="dao books"
                />
                <h5>DAO Books</h5>
                <p>
                  The{" "}
                  <a
                    href="https://books.daohaus.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DAOBooks
                  </a>{" "}
                  Boost helps you break down your Vaults, so you can understand
                  your DAO's inflows, outflows and transactions. This was built
                  by{" "}
                  <a
                    href="https://twitter.com/midgerate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Midge
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://twitter.com/xivanc01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xivanc1
                  </a>{" "}
                  from Boost Foundry.
                </p>
              </div>
              <div className="Column--33">
                <img
                  src={LogoRarible}
                  style={{ maxHeight: "40px" }}
                  alt="rarible"
                />
                <h5>Rarible</h5>
                <p>
                  The{" "}
                  <a
                    href="https://daohaus.club/docs/users/boosts/rarible-boost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rarible Boost
                  </a>{" "}
                  enables a DAO to buy and sell NFTs y through the Rarible
                  protocol, empowering both collector and creator DAOs of the
                  future.
                </p>
              </div>
              <div className="Column--33">
                <img
                  src={LogoDisperse}
                  style={{ maxHeight: "40px" }}
                  alt="disperse"
                />
                <h5>Disperse</h5>
                <p>
                  The{" "}
                  <a
                    href="https://daohaus.club/docs/users/boosts/disperse-boost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Disperse Boost
                  </a>{" "}
                  allows a DAO to transfer tokens from a Minion vault in bulk to
                  a list of addresses, facilitating airdrops or simpler payment
                  to multiple contributors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="Block PrimaryDark SubHero"
          style={{ backgroundImage: "url(" + HeroNumbers + ")" }}
          id="numbers"
        >
          <div className="Block__Contents">
            <div className="Row">
              <div>
                <h2>By the Numbers</h2>
                <p>
                  <i>
                    Let’s take a look at our growth for the past 12 months from
                    December 2020 to November 2021.
                  </i>
                </p>
              </div>
            </div>
            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAOs Summoned</h4>
                <p>
                  In 2021, we saw a{" "}
                  <strong>7x year-on-year increase in DAOs summoned</strong>,
                  reaching a total of nearly 2000 DAOs today. That’s nearly 150
                  DAOs summoned each month!
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAOs by Network</h4>
                <p>
                  80% of these 2000 DAOs are on L2/side-chains, with the
                  majority on xDai.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaosNetwork} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAO Members</h4>
                <p>
                  There are now have <strong>10,000 unique DAO members</strong>{" "}
                  (addresses) on DAOhaus, with around 2000 new unique DAO
                  members joining every month.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaosMembers} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAO Proposals</h4>
                <p>
                  In 2021, around{" "}
                  <strong>2500 proposals were submitted every month</strong>, a
                  4x increase since the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaosProposals} />
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row PadRow">
              <div className="Column--50">
                <h4>2021 TVL & Value Flows</h4>
                <p>
                  In 2021 ,{" "}
                  <strong>
                    the cumulative value flowing in and out of DAOhaus DAOs
                    totalled $416M
                  </strong>
                  , with $258M inflows and $168M in outflows. The total value of
                  assets currently controlled by DAOhaus DAOs is $80M.
                </p>
                <p>
                  In terms of November 2021 prices, these are all approximately
                  2x increases from the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartFlow} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>Monthly Flows</h4>
                <p>
                  On a monthly basis, the total value flowing into and out of
                  DAOs has reached $13M and $10M respectively. This is also
                  approximately a 2x increase since the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartMonthly} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>Gross DAOmestic Product</h4>
                <p>
                  As DAO2DAO interactions continue to grow, we are really
                  excited by the potential of this economy that we’re created
                  together. To track and nurture this economy further, we are
                  creating a way to measure economic activity & growth from DAOs
                  - <strong>Gross DAOmestic Product</strong>.
                </p>
                <p>
                  This is still a work in progress and we’re excited to share it
                  soon.
                </p>
              </div>
              <div className="Column--50"></div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryDark">
          <div className="Block__Contents">
            <div className="Row PadRow">
              <div className="Column--50">
                <h2>Thanks for a great 2021! What’s next?</h2>
                <p>
                  If you’ve been a part of our amazing 2021, we thank you for
                  making 2021 such an eventful year and we are excited about
                  what we’ll do together as a community in 2022. If this is all
                  new to you, we invite you to join us in our community today!
                </p>
                <p>
                  Looking forward, we want to bring the $HAUS token to Ethereum
                  Mainnet so the wider Ethereum ecosystem can join us in our
                  journey towards greater human coordination. We will be doing
                  so through our very own PoolHAUS initiative, so do look out
                  for more updates in the coming weeks! #HAUSComesHome
                </p>
                <p>
                  As we prepare for 2022 as the Year of the DAO, we are excited
                  about our{" "}
                  <strong>
                    2022 Product Roadmap supporting Moloch V3 (aka Baal) and
                    DAOhaus V3
                  </strong>
                  . We’ll be sharing more updates as we put up the final touches
                  to our Roadmap too.
                </p>
                <p>
                  Last but not least, if you’re not already part of the DAOhaus
                  family, we’d like you to join us!
                </p>
                <p>
                  We look forward to seeing you on Discord and hopefully IRL
                  during ETH Denver! Meanwhile, party on & happy coordinating!
                </p>
              </div>
              <div className="Column--50">
                <h4>Looking for a Community that resonates with you?</h4>
                <p>
                  <a href="https://app.daohaus.club/explore">Explore DAOs</a>
                </p>
                <h4>Already have a community?</h4>
                <p>
                  <a href="https://app.daohaus.club/summon">Summon a DAO</a>
                </p>
                <h4>Looking to contribute or just hang out?</h4>
                <p>
                  <a href="https://discord.gg/daohaus">Hop in our Discord</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
