import React from "react";
import Topbar from "./Topbar";
import "../css/visit.css";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import mesuem from "../assets/mesuem.jpg";
import pdf from "../assets/Membership.pdf";

const Membership = () => {
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
            250th anniversary in 1961. The founders stated the objects of the
            Society were the collecting of facts and material relative to the
            history of Norton and encouragement of any cultural activities.
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
            <li>
              Unlimited free admission to the Museum, History Center, and Leahy
              Library
            </li>
            <li>15% discount at the museum store and online</li>
            <li>Discounts on programs and workshops</li>
            <li>
              Subscription to semi-annual Vermont History journal and History
              Connections newsletter
            </li>
            <li>Voting privileges at the Annual Meeting</li>
          </ul>
          <p>
            If you want to join membership, please fill out a{" "}
            <a href={pdf} target="_blank">
              form
            </a>{" "}
            and mail your membership dues to:
          </p>
          <p>
            Norton Historical Society
            <br />
            18 West Main St.
            <br />
            P.O. Box 1711
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
