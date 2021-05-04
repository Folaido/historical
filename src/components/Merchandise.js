import React, { useState } from "react";
import { render } from "react-dom";
import Topbar from "./Topbar";
import "../css/merchandise.css";
import classpic from "../assets/DisplayCase_1.jpg";
import reservoir from "../assets/reservoir.jpg";
import church from "../assets/church.jpg";
import common from "../assets/common.jpg";
import enorton from "../assets/enorton.jpg";
import house1 from "../assets/house1.jpg";
import pond from "../assets/pond.jpg";
import factory from "../assets/factory.jpg";
import marylyon from "../assets/marylyon.jpg";
import men from "../assets/men.jpg";
import church2 from "../assets/church2.jpg";
import train from "../assets/train.jpg";
import church3 from "../assets/church3.jpg";
import house2 from "../assets/house2.jpg";
import townhall from "../assets/townhall.jpg";
import common2 from "../assets/common2.jpg";
import presHouse from "../assets/presHouse.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import nortonBook from "../assets/nortonBook.jpg";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Divider, Button, Row, Col } from "antd";
import Thing from "./merchWork";
const { Content, Footer } = Layout;
const { Meta } = Card;

class Merchandise extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.setState = {
      isFireModalVisible: false,
    };
  }

  render = () => (
    <Layout className="layout">
      <Topbar selectedKey={"Merchandise"} />
      <Content>
        <div className="content merc">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            <b>NHS STORE</b>
          </Divider>
          <br></br>
          <div className="featured-item">
            <img className="book-img" src={nortonBook} />
            <div className="book-content">
              <h1 className="title">Featured Item: Images of Norton Book</h1>
              <p>George A. Yelle and Ruth E. Goold</p>
              <p>$21.99</p>
              <a
                href="https://www.amazon.com/Norton-Massachusetts-George-Yelle/dp/0738502642/"
                target="_blank"
              >
                <Button className="btn" type="primary">
                  Shop Now
                </Button>
              </a>
            </div>
          </div>
          <br></br>
          <br></br>
          <h1 className="title">Historical Norton Magnets</h1>
          <p className="hint" style={{ fontSize: 16 }}>
            * Please visit the historical society to buy these magnets
          </p>

          <Row gutter={(8, 16)}>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Norton Reservoir"
                  title="Norton Reservoir"
                  description="Magnet - $2"
                  images={reservoir}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton Church"
                  title="Historic Norton Church"
                  description="Magnet - $2"
                  images={church}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Town Common"
                  title="Town Common"
                  description="Magnet - $2"
                  images={common}
                />
              </div>
            </Col>

            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="East Norton"
                  title="East Norton"
                  description="Magnet - $2"
                  images={enorton}
                />
              </div>
            </Col>

            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton House"
                  title="Historic Norton House"
                  description="Magnet - $2"
                  images={house1}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Peacock Pond"
                  title="Peacock Pond"
                  description="Magnet - $2"
                  images={pond}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Norton Factory"
                  title="Norton Factory"
                  description="Magnet - $2"
                  images={factory}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="MaryLyon"
                  title="MaryLyon"
                  description="Magnet - $2"
                  images={marylyon}
                />
              </div>
            </Col>

            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Men in Factory"
                  title="Men in Factory"
                  description="Magnet - $2"
                  images={men}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton Church #2"
                  title="Historic Norton Church #2"
                  description="Magnet - $2"
                  images={church2}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Train Station"
                  title="Train Station"
                  description="Magnet - $2"
                  images={train}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton Church #3"
                  title="Historic Norton Church #3"
                  description="Magnet - $2"
                  images={church3}
                />
              </div>
            </Col>

            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton House #2"
                  title="Historic Norton House #2"
                  description="Magnet - $2"
                  images={house2}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Old Town Hall"
                  title="Old Town Hall"
                  description="Magnet - $2"
                  images={townhall}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Town Common #2"
                  title="Town Common #2"
                  description="Magnet - $2"
                  images={common2}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="President's House"
                  title="President's House"
                  description="Magnet - $2"
                  images={presHouse}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton House #3"
                  title="Historic Norton House #3"
                  description="Magnet - $2"
                  images={house3}
                />
              </div>
            </Col>
            <Col xs={7.5} sm={7.5} md={7.5} lg={12} xl={8} xxl={8}>
              <div className="card-content">
                <Thing
                  name="something style"
                  mtitle="Historic Norton House #4"
                  title="Historic Norton House #4"
                  description="Magnet - $2"
                  images={house4}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
}

export default Merchandise;
