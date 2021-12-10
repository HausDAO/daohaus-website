import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import CommunityBlock from "../components/CommunityBlock";

import HausPartyPoap from "@site/static/img/HausParty__POAP--attendee.png";
import IconA from "@site/static/img/ico-grants.png";
import IconB from "@site/static/img/ico-protocols.png";
import IconC from "@site/static/img/ico-guilds.png";
import IconD from "@site/static/img/ico-clubs.png";

import HeroReview from "@site/static/img/hero_review.jpg";
import HausCommProduct from "@site/static/img/haus_communityproduct.png";
import EthCC from "@site/static/img/EthCC.jpg";

import LogoUberHaus from "@site/static/img/review/logo_uberhaus.png";

import Integrations from "@site/static/img/review/haus_integrations.png";

import ChartDaos from "@site/static/img/review/chart_daos-summoned.png";

import "../css/global.scss";
import "../css/community.scss";

const Review = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Daohaus Docs: Learnin' and burnin'"
    >
      <div className="Home">
        <div
          className="Block PrimaryDark"
          style={{ backgroundImage: "url(" + HeroReview + ")" }}
        >
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h1>DAOHAUS in 2021</h1>
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
                  2021 has been an amazing year for DAOhaus where we saw
                  tremendous growth in community engagement, ecosystem activity
                  & product functionality. As we look toward 2022, we’d like to
                  recount everything that happened in 2021 and re-introduce
                  DAOhaus to our community (new and old). At its core, the
                  DAOhaus platform is the easiest way for individuals to start a
                  DAO and help their communities coordinate to achieve shared
                  goals. While creating good software is what we do, what makes
                  DAOhaus special is the tight-knit community that uses, builds
                  and advocates DAOhaus & the values we live by.
                </p>
                <p className="yellowColor">
                  <a href="#community">Community First</a>
                </p>
                <p className="yellowColor">
                  <a href="#product">Product Updates</a>
                </p>
                <p className="yellowColor">
                  <a href="#numbers">By the Numbers</a>
                </p>
              </div>
              <div className="Column--50">
                <img src={HausCommProduct} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2>Community First</h2>
                <p>
                  While creating good software is what we do at DAOhaus, the
                  true magic is not in the app screens, code or smart contracts.
                  Given Web3’s open-source and composable nature, another Dev
                  team could replicate and create products to help people start
                  and manage DAOs. If that’s the case, then what makes DAOhaus
                  special? To us, the magic lies in the purpose-driven
                  communities and the interactions between these communities.
                  When you use DAOhaus, you don’t just get software with great
                  features. You get access to an ecosystem of grants, service
                  providers, partners and investors. You find your tribe of
                  people to experiment and solve the same issues together. You
                  can own, build and govern DAOhaus with the rest of us.
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
                <img src={EthCC} />
              </div>
              <div className="Column--33">
                <h4>NFT.NYC</h4>
                <h6>NYC</h6>
                <img src={EthCC} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>UberHaus</h3>
                <p>
                  UberHaus is the DAO of 70+ DAOs that governs the DAOhaus
                  platform and the remaining supply of $HAUS. Instead of
                  centralized core teams, inner circles, and opaque decision
                  making processes, we are truly community-owned and governed.
                  Working together, UberHaus aims to build more tooling,
                  strengthen DAO2DAO interactions and further the adoption of
                  decentralized and digital coordination.
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
                  The DAOhaus platform is managed by Warcamp DAO, a team of 20
                  (and growing) core contributors with different skill sets,
                  time zones, and bandwidth availability. Each contributor is a
                  member of one or more Circles, or functional working groups,
                  underneath the Warcamp umbrella.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>PoolHaus</h3>
                <p>
                  PoolHAUS is our on-going experiment to create sustainable &
                  incentives-aligned $HAUS liquidity through a DAO made up of
                  Liquidity Providers. Our goal was to reach $500K in liquidity
                  on xDAI, but we doubled that with $1M in liquidity. In our
                  next evolution, we are bringing PoolHAUS to Ethereum Mainnet
                  soon with the aim of $3M in liquidity. Currently, PoolHAUS is
                  55 members strong, and we welcome any HAUS holders to come
                  before the launch of our next liquidity raise.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>HausParty</h3>
                <p>
                  HAUS Party is where we hang out every week on Discord to
                  listen to community stewards, builders and Web 3 experts share
                  their stories and learnings. With Felipe taking over as the
                  HAUS Party host from Kerp, we have had more than 30 authentic
                  and insightful sharings this year. Here’s a snapshot of all
                  the POAPs given out during the HAUS Parties in 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Foundations DAO</h3>
                <p>
                  Onboarding into a DAO should be fun, so we created Foundations
                  to help people new to the DAO space learn about DAOs through
                  taking action. In collaboration with Rabbithole, we onboarded
                  3,000 members on FoundationsDAO in 2 months. In the history of
                  DAOhaus, this is the most viral introduction of a DAO to
                  newcomers, creating one of the largest DAOs on DAOhaus.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
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
                <img src={LogoUberHaus} />
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2>Product</h2>
                <p>
                  DAOhaus offers an infinitely expansive ecosystem for folks to
                  come build products, experiment, and join in participatory
                  ownership over shared resources. Our gift is our community,
                  the successes we have achieved in the DAOhaus product could
                  not have been achieved without you!
                </p>
              </div>
              <div className="Column--50"></div>
            </div>
            <div className="Row PadRow">
              <img
                src={Integrations}
                style={{ maxWidth: 800, margin: "0 auto" }}
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
                  Minions enable DAOs to execute arbitrary actions with smart
                  contracts on behalf of its members, so now you can trade NFTs,
                  provide liquidity, and do DeFi farming within your proposals.
                </p>
                <p>
                  We’ve launched Minions V2 and V3 this year, enabling quorum
                  voting and early execution. Partnering with Gnosis, we’ve also
                  launched the Safe Minion, storing your funds safely in a
                  Gnosis Safe while giving your DAO the same ability to interact
                  with smart contracts.
                </p>
                <p>
                  In 2021, we saw 900 Minions being installed and used by DAOs.
                  Among those installed, the Safe Minion is the fastest growing
                  Minion with 206 installs, despite only being 3 months old.
                </p>
                <p>
                  The Safe Minion is only second to the Vanilla Minion, which is
                  our oldest Minion that has been around since the start of
                  2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h3>Boosts</h3>
                <p>
                  The Boosts Marketplace for DAOs went live in 2021. Similar to
                  iOS/Android apps, Boosts help run your DAO more effectively
                  and efficiently.
                </p>
                <p>
                  Today we have 15 Boosts on the Marketplace that are built by
                  the Magesmiths as well as Boost Foundry. 30% of all DAOhaus
                  DAOs have installed at least 1 Boost.
                </p>
                <p>
                  Among the Boosts, the Discord Notifications Boost had the
                  highest installations, helping DAOs send proposal
                  notifications to their Discord members. Following that, the
                  Wrap N Zap Boost and Discourse Forum Boost came in second and
                  third place respectively.
                </p>
              </div>
              <div className="Column--50">
                <img src={LogoUberHaus} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--33">
                <h5>DAO Books</h5>
                <p>
                  The DAOBooks Boost helps you break down your Vaults &
                  Treasury, so you can better understand the inflows, outflows
                  and transactions of your DAOs. This was a community-initiated
                  Boost built by Midge & Xivanc1 from Boost Foundry.
                </p>
              </div>
              <div className="Column--33">
                <h5>Rarible</h5>
                <p>
                  The Rarible Boost helps you buy and sell NFTs in your DAO
                  treasury through the Rarible platform, empowering NFT
                  collector DAOs of the future.
                </p>
              </div>
              <div className="Column--33">
                <h5>Disperse</h5>
                <p>
                  Using the Disperse smart contracts, the Disperse Boost helps
                  you disperse tokens in a Minion vault to a list of addresses,
                  facilitating airdrops or splitting of funds.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryDark">
          <div className="Block__Contents">
            <div className="Row">
              <h2>By the Numbers</h2>
            </div>
            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAOs Summoned</h4>
                <p>
                  In 2021, we saw a 7x year-on-year increase in summoned DAOs,
                  reaching nearly 2000 DAOs today. Every month, around 250 new
                  DAOs are summoned.
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
                <img src={ChartDaos} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAO Members</h4>
                <p>
                  In 2021, we now have 10,000 unique DAO members on DAOhaus,
                  with around 2000 new unique DAO members joining every month.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>DAO Proposals</h4>
                <p>
                  In 2021, around 2500 proposals were submitted every month,
                  seeing a 4x increase since the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row PadRow">
              <div className="Column--50">
                <h4>Finance & Value Flow</h4>
                <p>
                  On a 12-month rolling basis, the total fund inflows into and
                  outflows from DAOs totalled $416M, with $258M inflows and
                  $168M in outflows. The total value locked in DAOhaus DAOs is
                  at $80M.
                </p>
                <p>
                  The fund inflows, outflows and value locked in DAOs have all
                  seen an approximate 2x increase from the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>Monthly Outflows</h4>
                <p>
                  On a monthly basis, the total value flowing into and out of
                  DAOs has reached $13M and $10M respectively. This is also
                  approximately a 2x increase since the beginning of 2021.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>

            <div className="Row PadRow">
              <div className="Column--50">
                <h4>Gross DAOmestic Product</h4>
                <p>
                  As DAO2DAO interactions start to grow, we are really excited
                  by the potential of this economy that we’ve created together.
                  To track and nurture this economy further, we are creating a
                  way to measure economic activity & growth from DAOs - Gross
                  DAOmestic Product. This is still a work in progress and we’re
                  excited to reveal this to you very soon.
                </p>
              </div>
              <div className="Column--50">
                <img src={ChartDaos} />
              </div>
            </div>
          </div>
        </div>

        <div className="Block">
          <div className="Block__Contents">
            <div className="Row PadRow">
              <div className="Column--50">
                <h2>Thank you for a great 2021! What’s next?</h2>
                <p>
                  If you’ve been a part of our amazing 2021, we thank you for
                  making 2021 such an eventful year and we are really excited
                  about what we’ll do together as a community in 2022. If all
                  these are new to you, we invite you to join us in our
                  community today!
                </p>
                <p>
                  Looking forward, we want to bring the HAUS token to Ethereum
                  Mainnet, so the wider Ethereum ecosystem can join us in our
                  journey towards greater human coordination. We will be doing
                  so through our very own PoolHAUS initiative, so do look out
                  for more updates in the coming weeks! #HAUSComesHome
                </p>
                <p>
                  As we prepare for 2022 as the Year of the DAO, we are really
                  excited about our 2022 Product Roadmap supporting Moloch V3
                  (aka Baal) and DAOhaus V3. We’ll be sharing more updates as we
                  put up the final touches to our Roadmap too.
                </p>
                <p>
                  Last but not least, if you’re not already part of the DAOhaus
                  family, we’d like you to join us!
                </p>
              </div>
              <div className="Column--50">
                <p>Looking for a Community that resonates with you?</p>
                <p>
                  <a href="https://app.daohaus.club/explore">Explore DAOs</a>
                </p>
                <p>Already have a community?</p>
                <p>
                  <a href="https://app.daohaus.club/summon">Summon a DAO</a>
                </p>
                <p>Looking to contribute or just hang out?</p>
                <p>
                  <a href="https://discord.gg/daohaus">Hop in our Discord</a>
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

export default Review;
