import { React, useEffect } from "react";
import Topbar from "./Topbar";
import "../css/visit.css";
import { Link } from "react-router-dom";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider } from "antd";
import mesuem from "../assets/mesuem.jpg";

const Visit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <p>
            Monday 10a.m. - 2p.m.
            <br />
            It is suggested you call (508)285-7070 to be sure it is open.
            Research assistance is available in the fields of genealogy and
            local history. Education programs are provided for school groups.
          </p>
          <p>{"\n"}</p>
          <p className="bold" style={{ display: "inline" }}>
            ADMISSION:
          </p>
          <p>Free and open to public</p>
          <p>{"\n"}</p>
          <p className="bold" style={{ display: "inline" }}>
            LOCATION:
          </p>
          <p>18 West Main Street, Norton, MA</p>
          <p>{"\n"}</p>

          <p className="bold" style={{ display: "inline" }}>
            CONTACT INFO:
          </p>
          <ul>
            <li>(508)285-7070</li>
            <li>nortonhistoricalsociety@verizon.net</li>
            <li>
              <a href="http://www.facebook.com/NortonMAHistoricalSociety">
                Facebook Account
              </a>
            </li>
          </ul>
          <Link to="/gallery">
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
