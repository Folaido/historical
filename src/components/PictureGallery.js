import React from "react";
import Topbar from "./Topbar";
import "../css/volunteer.css";
import { Footer as Bottom } from "./Footer";
import { Layout } from "antd";
import oldNort from "../assets/OldNort.jpg";
import { Divider, Card, Row, Col } from "antd";
import { Image } from 'antd';
import campms from "../assets/CampMS.jpg";
import welcomeww2 from "../assets/WelcomeWW2.jpg";
import ThingPic from "./PictureWorks";
import { Link } from "react-router-dom";
import barrow from "../assets/BarrowsvilleRR.jpg";
import barrowpdf from "../assets/histBar.pdf"
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
                        <b className="title1">EXHIBITION</b>
                    </Divider>
                    <div>
                        <p>Click on any of the images below to learn more</p>
                    </div>

                    <div>

                        <Row gutter={[8, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12}xl={12} xxl={12} >
                                <Link to="/CampMS">

                                    <ThingPic
                                        title="Camp Myles Standish"
                                        image={campms}
                                    />
                                </Link>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12}xl={12} xxl={12} >
                                <Link to="/WW2">
                                <ThingPic
                                    title="WW2 Homecoming"
                                    image={welcomeww2}
                                />
                                </Link>
                            </Col>





                        </Row>

                    </div>
                    <div>
                     <Row gutter={[8, 16]}>
                            <Col xs={24} sm={24} md={12} lg={12}xl={12} xxl={12} >
                                
                                <a href={barrowpdf} target="_blank">
                                    <ThingPic
                                        title="History of Barrowsville"
                                        image={barrow}
                                    />
                                    </a>
                               
                            </Col>

                           





                        </Row>
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
