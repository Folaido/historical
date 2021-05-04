import React, { useState } from "react";
import { render } from "react-dom";
import Topbar from "./Topbar";
import "../css/merchandise.css";
import classpic from "../assets/DisplayCase_1.jpg";
import reservoir from "../assets/reservoir.jpg";
import church from "../assets/church.jpg";
import common from "../assets/common.jpg";
import enorton from "../assets/enorton.jpg";
import map1 from "../assets/map1.jpeg";
import map2 from "../assets/map2.jpeg";
import map3 from "../assets/map3.jpeg";
import josephbook from "../assets/josephbook2.jpeg";
import norton300 from "../assets/norton300.jpeg";
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
import Thing1 from "./mapWork";
const { Content, Footer } = Layout;
const { Meta } = Card;

class Merchandise extends React.Component {
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
        <div className="content">
          <Divider plain orientation="left" style={{ fontSize: 40 }}>
            <b>NHS Store</b>
          </Divider>

          <div className="site-layout-content">
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
                <Button className="btn" type="primary">Shop Now</Button></a>
              </div>
            </div>
            <br></br>
            <br></br>
            <h2 className="title">WELCOME TO DISCOVER NHS SHOP</h2>
            <br></br>
            <br></br>
            <div className="book-card-content">
                <img className= "book-pic"src={josephbook} alt="joseph book"></img>
                <br></br>
                <br></br>

                <p className="descriptionTitle">The Devil's Footprints and Other Sketches of Old Norton</p>
                <p>By Joseph E. Yelle, Town Historian </p>
                <p>Published for the Town of Norton by the Norton Historical Commission</p>

            </div>
            <div className="book-card-content">
                <img className= "book-pic"src={norton300} alt="norton 300"></img>
                <br></br>
                <br></br>

                <p className="descriptionTitle"> Norton 300 - Celebrating Norton's 300th Anniversary</p>
                <p>Written by Frances A. Shirley Designed by Cynthia Gouveia </p>
                <p>300 Years of History</p>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="title">NORTON HISTORICAL MAPS</h2>
            <br></br>
            
            <Row
              gutter={(8, 8)}
              style={{ justifyContent: "center", textAlign: "center" }}
            >
             <Col xs={24} sm={24} md={24} lg={12}xl={8} xxl={8}>
             <div className="card-content">
              <Thing1
                name="something style"
                mtitle="Norton Map Circa 1855"
                title="Norton Map Circa 1855"
                description="Map - $10"
                images={map1}
              />
              
            </div>
             </Col>
            
             
            
            
            <Col xs={24} sm={24} md={24} lg={12}xl={8} xxl={8}>
            <div className="card-content">
            
              <Thing1
                name="something style"
                mtitle="Norton Map Circa 1871"
                title="Norton Map Circa 1871"
                description="Map - $10"
                images={map2}
              />
            </div>
             </Col>
            
            <Col xs={24} sm={24} md={24} lg={12}xl={8} xxl={8}>
            <div className="card-content">
              <Thing1
                name="something style"
                mtitle="Norton Map Circa 1895"
                title="Norton Map Circa 1895"
                description="Map - $10"
                images={map3}
              />
            </div>
             </Col>
           </Row>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="title">NORTON HISTORICAL PHOTO MAGNETS</h2>
            <br></br>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Norton Reservoir"
                title="Norton Reservoir"
                description="Magnet - $2"
                images={reservoir}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton Church"
                title="Historic Norton Church"
                description="Magnet - $2"
                images={church}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Town Common"
                title="Town Common"
                description="Magnet - $2"
                images={common}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="East Norton"
                title="East Norton"
                description="Magnet - $2"
                images={enorton}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton House"
                title="Historic Norton House"
                description="Magnet - $2"
                images={house1}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Peacock Pond"
                title="Peacock Pond"
                description="Magnet - $2"
                images={pond}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Norton Factory"
                title="Norton Factory"
                description="Magnet - $2"
                images={factory}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="MaryLyon"
                title="MaryLyon"
                description="Magnet - $2"
                images={marylyon}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Men in Factory"
                title="Men in Factory"
                description="Magnet - $2"
                images={men}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton Church #2"
                title="Historic Norton Church #2"
                description="Magnet - $2"
                images={church2}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Train Station"
                title="Train Station"
                description="Magnet - $2"
                images={train}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton Church #3"
                title="Historic Norton Church #3"
                description="Magnet - $2"
                images={church3}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton House #2"
                title="Historic Norton House #2"
                description="Magnet - $2"
                images={house2}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Old Town Hall"
                title="Old Town Hall"
                description="Magnet - $2"
                images={townhall}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Town Common #2"
                title="Town Common #2"
                description="Magnet - $2"
                images={common2}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="President's House"
                title="President's House"
                description="Magnet - $2"
                images={presHouse}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton House #3"
                title="Historic Norton House #3"
                description="Magnet - $2"
                images={house3}
              />
            </div>
            <div className="card-content">
              <Thing
                name="something style"
                mtitle="Historic Norton House #4"
                title="Historic Norton House #4"
                description="Magnet - $2"
                images={house4}
              />

            </div>
          </div>
        </div>
      </Content>

      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
}

export default Merchandise;
