import React from "react";
import Topbar from "./Topbar";
import "../css/campmyles.css";
import { Footer as Bottom } from "./Footer";
import { Layout } from "antd";
import oldNort from "../assets/OldNort.jpg";
import { Divider, Card, Row, Col } from "antd";
import { Image } from 'antd';
import campms from "../assets/CampMS.jpg";
import welcomeww2 from "../assets/WelcomeWW2.jpg";
import ThingPic from "./PictureWorks";
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
                        <b className="title1">Camp Myles Standish</b>
                    </Divider>
                    <div>
                        <p>Click on any of the images below to learn more</p>
                    </div>

                    <div>

                        <Row gutter={[8, 16]}>
                            <Col span={24} >




                                <Image

                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                                <p> Some text describing</p>
                            </Col>

                            <Col span={24} >
                                <Image


                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
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
