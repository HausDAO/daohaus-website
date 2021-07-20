import React from "react";

import { DiGithubAlt } from "react-icons/di";
import { RiDiscordFill } from "react-icons/ri";
import HausHugeType from "@site/static/img/haus__hugeType.png";
import SubstackSvg from "@site/static/img/Substack.svg";

import "../css/community.scss";

const CommunityBlock = () => {
  return (
    <div className="Block PrimaryDark">
      <div className="Block__Contents">
        <div className="Row">
          <div className="Column--50">
            <img src={HausHugeType} alt="" />
            <h3 className="whiteColor" style={{ margin: "75px 0px 25px" }}>
              Our mission is to foster a diverse, open economy of transparent
              cooperation.
            </h3>
            <p className="BigP">
              DAOhaus is built and run by the community using DAOs to
              coordinate.
            </p>
          </div>
          <div className="Column--50"></div>
        </div>

        <div className="Row" style={{ marginTop: 75 }}>
          <div className="Column--33 SocialItem">
            <a
              href="https://discord.gg/daohaus"
              target="_blank"
              rel="noopener noreferrer"
              className="SocialIcon"
            >
              <RiDiscordFill />
            </a>
            <h4 className="tradColor">Discord</h4>
            <p>Get support, provide feedback, ask anything about DAOs.</p>
          </div>
          <div className="Column--33 SocialItem">
            <a
              href="https://daohaus.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="SocialIcon"
            >
              <SubstackSvg />
            </a>
            <h4 className="yellowColor">Substack</h4>
            <p>
              Get the alpha while it's still alpha. Stay up to date and learn
              what’s on the horizon.
            </p>
          </div>
          <div className="Column--33 SocialItem">
            <a
              href="https://github.com/HausDAO/pokemol-web"
              target="_blank"
              rel="noopener noreferrer"
              className="SocialIcon"
            >
              <DiGithubAlt />
            </a>
            <h4 className="daoColor">Github</h4>
            <p>
              Check the code, it's open-source of course. Add an issue, submit a
              PR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBlock;
