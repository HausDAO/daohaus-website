import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "../css/global.scss";
import "../css/token.scss";

const Daocember = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description="DAOcember'">
      <div className="Home">
        <div className="Block PrimaryDark Daocember__Block">
          <div className="Block__Contents">
            <h1>DAOcember Schedule</h1>
            <div className="iframe">
              <iframe
                className="VideoSize"
                src="https://calendar.google.com/calendar/embed?src=c_8caa7b5bf8504a638189c420853b7af7598426279f7b6d13cd67b4cc86e25a7a%40group.calendar.google.com&ctz=America%2FToronto"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className="link">
              <a
                href="https://calendar.google.com/calendar/u/0/embed?src=c_8caa7b5bf8504a638189c420853b7af7598426279f7b6d13cd67b4cc86e25a7a@group.calendar.google.com&ctz=America/Toronto"
                target="_blank"
              >
                Open Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Daocember;
