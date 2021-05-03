import { React, useEffect } from "react";
import Topbar from "./Topbar";
import "../css/visit.css";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import pdf from "../assets/Membership.pdf";

const Membership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Topbar />
      <Content>
        <div className="content">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            <b>MEMBERSHIP</b>
          </Divider>
          <p>
            The Society was founded in 1960 in time to celebrate the town's
            250th anniversary in 1961. The founders stated the objective of the
            Society is to collect all artifacts and materials related to the
            history of Norton and encourage any cultural activities.
          </p>
          <p>
            In the early 1970's the District 3 Schoolhouse was moved to its
            present location on West Main Street and is now the Society's
            headquarters. The interior has been restored with part replicating
            an old school room and part a museum of objects relevant to Norton's
            history. The Society receives and preserves old documents, books,
            furniture and artifacts related to this region.
          </p>
          <p>
            From September through May (except December) the third Tuesday of
            the month at 8 p.m. is reserved for meetings which are open to the
            public. Talks, mainly concerning local history or personal
            recollections of earlier times and slide shows are given by members
            and guest speakers.
          </p>
          <p className="bold">Member Benefits</p>
          <ul>
            <li>Visit museum at anytime during our hours of operation</li>
            <li>Attend lectures and talks held by the society</li>
            <li>Being a part of the preservation of Nortons rich history!!!</li>
          </ul>
          <p>
            To become a member, please fill out a{" "}
            <a href={pdf} target="_blank">
              form
            </a>{" "}
            and mail your membership dues to:
          </p>
          <p>
            Norton Historical Society
            <br />
            P.O. Box 1711
            <br />
            18 West Main St.
            <br />
            Norton, MA 02766
          </p>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
};

export default Membership;
