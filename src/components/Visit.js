import React from "react";
import Topbar from "./Topbar";
import "../css/visit.css";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import mesuem from "../assets/mesuem.jpg";

const Visit = () => {
  const { Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Topbar selectedKey={"Visit"} />
      <Content>
        <div className="content">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            <b>VISITING</b>
          </Divider>
          <img className="mesuem-pic" alt="mesuem" src={mesuem} />
          <p className="bold">
            PLEASE NOTE: Due to rising COVID-19 case counts across the
            Northeast, the museum is now closed. Please wait for future updates.
          </p>
          <p className="bold" style={{ display: "inline" }}>
            NORMAL HOURS:
          </p>
          <p style={{ display: "inline" }}>Wednesday- Saturday 10 am - 4 pm</p>
          <p>{"\n"}</p>
          <p className="bold" style={{ display: "inline" }}>
            ADMISSION:
          </p>
          <ul>
            <li>Adults: $7</li>
            <li>Families: $20</li>
            <li>Seniors, students, children: $5</li>
            <li>Members and children under 6: Free</li>
          </ul>
          <p className="bold" style={{ display: "inline" }}>
            LOCATION:
          </p>
          <p style={{ display: "inline" }}>26 East Main Street, Norton, MA</p>
          <p>{"\n"}</p>

          <p className="bold" style={{ display: "inline" }}>
            CONTACT INFO:
          </p>
          <ul>
            <li>(508)285-8300</li>
            <li>nortonhistorical@gmail.com</li>
          </ul>

          <p>{"\n"}</p>

          <Link to="/">
            <p style={{ color: "#431857", textDecoration: "underline" }}>
              Click here for our online exhibit
            </p>
          </Link>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
};

export default Visit;
