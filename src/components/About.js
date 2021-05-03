import React from "react";
import Topbar from "./Topbar";
import "../css/about.css";
import { Footer as Bottom } from "./Footer";
import { Layout } from "antd";
import logo from "../assets/logo.png";
import ruth from "../assets/RuthNHS.jpg";
import janice from "../assets/Janice.png";
import bob from "../assets/boblanpher.png";
import Thing from "./Works";
import { Divider, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
const { Content, Footer } = Layout;

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render = () => (
    <Layout className="layout">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <Topbar selectedKey={"About"} />

      <Content>
        <div className="content">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            {" "}
            <b className="abouTitle">ABOUT US</b>
          </Divider>

          <h2 className="subcat1">
            <b>STAFF</b>
          </h2>

          <div className="site-card-wrapper">
            <Row
              gutter={(16, 8)}
              style={{ justifyContent: "center", textAlign: "center" }}
            >
              <Col span={7.5}>
                <Thing
                  name="Ruth Goold"
                  mtitle="Ruth Goold"
                  title=" Former President"
                  image={ruth}
                />

                {/* <Card hoverable style={{ width: 250,  fontSize: 22 }} title={<Title level={4}>President</Title>} onClick={showModal} bordered={false} cover={<img src={logo} alt="Logo" />}
                >
                  <p>Ruth Goold</p>
                </Card>
                <Modal title="Ruth Goold" visible={setIsModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <p> text about Ruth</p>
                  <p> text about Ruth</p>
                  <p> text about Ruth</p>
                </Modal> */}
              </Col>
              <Col span={7.5}>
                <Thing
                  name="Janice Burkhart"
                  mtitle="Janice Burkhart"
                  title="Vice President"
                  image={janice}
                />
              </Col>
              <Col span={7.5}>
                <Thing
                  name="Bob Lanpher"
                  mtitle="Bob Lanpher"
                  title="Treasurer"
                  image={bob}
                />
              </Col>
            </Row>
          </div>

          <div>
            <h2 className="subcat1">
              <b>Directors</b>
            </h2>
            <div className="site-card-wrapper">
              <Row
                gutter={(16, 8)}
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <Col span={7.5}>
                  <Thing
                    name="Marshall Martin"
                    mtitle="Marshall Martin"
                    title="Director"
                    image={logo}
                  />
                </Col>
                <Col span={7.5}>
                  <Thing
                    name="Joe"
                    mtitle="Joe"
                    title="Director"
                    image={logo}
                  />
                </Col>
                <Col span={7.5}>
                  <Thing
                    name="Christine Carmichael"
                    mtitle="Christine Carmichael"
                    title="Director"
                    image={logo}
                  />
                </Col>
                <Col span={7.5}>
                  <Thing
                    name="Joyce Guild"
                    mtitle="Joyce Guild"
                    title="Director"
                    image={logo}
                  />
                </Col>
                <Col span={7.5}>
                  <Thing
                    name="George Yelle"
                    mtitle="George Yelle"
                    title="Director"
                    image={logo}
                  />
                </Col>
              </Row>
            </div>
          </div>

          {/* <div className="site-layout-content"> */}

          <h2 className="subcat1">
            <b>WHAT WE DO</b>
          </h2>
          <p className="text1">
            Our main goal is to educate the citizens of Norton by providing an
            understanding of past traditions and a comprehensive history of the
            town.
          </p>

          <p className="text1">
            We collect, study, and maintain photographs, newspapers, artifacts,
            books, publications and other miscellaneous items relating to the
            history of Norton. Additionally, we provide public programs, events,
            and a tour of the Old School House at 18 West Main St.
          </p>
          <p className="text1">
            As a historical society we are here to assist those who are looking
            for information regarding the history of Norton, as well as
            supporting academic research.
          </p>
          {/* </div> */}
          {/* <div className="site-layout-content"> */}
          <h2 className="subcat1">
            <b>NHS Founders Statement</b>
          </h2>
          <p className="text1">
            The Norton Historical Society was founded in January of the year
            before the Town celebrated its 250th anniversary. A group of
            citizens met in the high school, made Joseph Yelle their Chairman,
            and drew up by-laws.
          </p>
          <p className="text1">
            These articles were approved in March, 1960, and Mr. Yelle was
            elected the Society's first president.
          </p>
          <p className="text1">
            From the start, the Historical Society has endeavored to direct
            attention to the history of Norton, to preserve records and
            artifacts form the Towns past, and to draw together people with an
            interest in the culture of the area.{" "}
          </p>
          <p className="text1">
            A wide range of programs has been presented to members during the
            past three years. There have been visits to old homes, reports on
            early industries in the town , histories of outstanding families in
            the area, and investigations of the transportation systems that have
            served Norton.
          </p>

          <p className="text1">
            Some speakers have come from further afield. The range of talks
            extends form detailed studies of small sections of Norton's history
            to the much wider subject of antique collecting.
          </p>

          <p className="text1">
            In addition to meetings and discussions, the Society has several
            long-range projects. Eventually material will be gathered to
            continue the Rev. Mr. Clark's History of Norton.
          </p>
          <p className="text1">
            Tape recordings are gradually being made of the reminiscences of
            some of the Town's oldest citizens.
          </p>
          <p className="text1">
            Since 1961 the society has been busy restoring the school house on
            South Worcester Street. Eventually this building, owned by the
            Society, will serve as a meeting place and provide space to house
            the increasing number of items being donated by town residents who
            want truer old maps, records, and artifacts collected in a central
            place where they will be available to all those interested in Norton
            History.
          </p>
          <br />
          <div classname="names">
            <p className="text3" style={{fontSize:"12px"}}>
              {" "}
              <b>The NHS website was refactored in 2021 by:</b> Ziran Fei,
              Natalie Laliberte, James Stratton, and Nate Lichauco
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
