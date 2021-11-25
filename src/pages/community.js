import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import CommunityBlock from "../components/CommunityBlock";
import HausBuilding from "@site/static/img/haus_building.png";
import HausPartyPoap from "@site/static/img/HausParty__POAP--attendee.png";
import IconA from "@site/static/img/ico-grants.png";
import IconB from "@site/static/img/ico-protocols.png";
import IconC from "@site/static/img/ico-guilds.png";
import IconD from "@site/static/img/ico-clubs.png";

import "../css/global.scss";
import "../css/community.scss";

const Community = () => {
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
                <h1>DAOs with artistic and activist flavour</h1>
                <p className="BigP daoColor" style={{ maxwidth: "500px" }}>
                <strong style={{ color: "white" }}>st</strong>
              <strong style={{ color: "yellow" }}>.</strong>
              <strong style={{ color: "red" }}>art </strong>
              extends Decentralised Autonomous Organisations for artistic and activist movements in cities.
                </p>
              </div>
              <div className="Column--50">
                <img src={HausBuilding} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Block PrimaryBg">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2>HausParty every Thursday</h2>
                <p className="BigP">
                  HausParty is the weekly community call and podcast open to
                  all. We usually start with some updates from the community,
                  into some conversation with a guest from the space, and
                </p>
                <p>
                  Join us and get a <a href="poap.xyz">POAP NFT</a> for
                  attending.
                </p>
                <p className="yellowColor">
                  Weekly at 11am PST / 8pm CET in our{" "}
                  <a
                    href="https://discord.gg/daohaus"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Discord
                  </a>
                </p>
              </div>
              <div className="Column--50">
                <img src={HausPartyPoap} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Usecases Block">
          <div className="Block__Contents">
            <h3>How we work</h3>
            <p>
              HausDAO is the hub from which each working group requests their
              budget. Each ‘Department’ has its own DAO for optimal autonomy.
            </p>
            <div className="Row">
              <div className="Column--50">
                <img src={IconA} alt="" width="80px" />
                <h5>Magesmiths (Product)</h5>
                <p>
                  Magesmiths are builders. Shipping code, designing user
                  experience, and generally making sure stuff works and feels
                  nice.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconB} alt="" width="80px" />
                <h5>Rangers (Comms/Community)</h5>
                <p>
                  Rangers are communicators. Distilling all our wild ideas into
                  content suitable for human consumption. Also running that
                  HausParty.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconC} alt="" width="80px" />
                <h5>Paladins</h5>
                <p>
                  Defenders of the realm, ensuring operational needs are met.
                  Working the budget, schedules, leading workshops. Generally
                  making sure we all have what we need to create value.
                </p>
              </div>
              <div className="Column--50">
                <img src={IconD} alt="" width="80px" />
                <h5>Alchemists</h5>
                <p>
                  Alchemists brew up the economic and governance design that
                  ties DAOs together, both internally and to each other.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <div className="Row">
              <div className="Column--50">
                <h2>Get involved</h2>
                <p className="BigP">
                  The Haus is constantly getting bigger and is always under
                  construction. We’re always looking for folks passionate about
                  building for decentralized communities.
                </p>
                <p className="daoColor">
                  For now, find us in our{" "}
                  <a
                    href="https://discord.gg/daohaus"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Discord
                  </a>
                </p>
              </div>
              <div className="Column--50">
                <h4>Common areas of contribution:</h4>
                <ul>
                  <li>Comms and Content</li>
                  <li>Community Building and Support</li>
                  <li>UX/UI Design</li>
                  <li>Frontend & Backend Dev</li>
                  <li>Smart Contracts</li>
                  <li>Token Engineering</li>
                  <li>Operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CommunityBlock />
      </div>
    </Layout>
  );
};

export default Community;
