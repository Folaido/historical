import React from "react";
import Topbar from "./Topbar";
import "../css/volunteer.css";
import { Footer as Bottom } from "./Footer";
import { Layout } from "antd";
import oldNort from "../assets/OldNort.jpg";
import { Divider, Card, Row, Col } from "antd";
const { Content, Footer } = Layout;

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render = () => (
    <Layout className="layout">
      <Topbar selectedKey={"About"} />

      <Content>
        <div className="content">
          <Divider plain orientation="left">
            {" "}
            <b className="title1">Volunteer </b>
          </Divider>
          <div>
            <img src={oldNort} className="oldNort"></img>
          </div>

          <div className="bodytext1">
            <p className="text2">
              With your help we can better preseve Norton's illustrious history,
              and connect the people of Norton to our town's story.
            </p>
            <p className="text2">
              As a smaller soceity we are constantly looking for volunteers to
              help out
            </p>

            <p className="text2">
              For more information, please contact us at (508)285-7070 or
              nortonhistoricalsociety@verizon.net.
            </p>
          </div>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
}

export default Home;
