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
import pic1 from "../assets/WW2/Norton WWII 1.jpg"
import pic2 from "../assets/WW2/Norton WWII 2.jpg"
import pic3 from "../assets/WW2/Norton WWII 3.jpg"
import pic4 from "../assets/WW2/Norton WWII 4.jpg"
import pic5 from "../assets/WW2/Norton WWII 5.jpg"
import pic6 from "../assets/WW2/Norton WWII 6.jpg"
import pic7 from "../assets/WW2/Norton WWII 7.jpg"
import pic8 from "../assets/WW2/Norton WWII 8.jpg"
import pic9 from "../assets/WW2/Norton WWII 9.jpg"
import pic10 from "../assets/WW2/Norton WWII 10.jpg"
import pic11 from "../assets/WW2/Norton WWII 11.jpg"
import pic12 from "../assets/WW2/Norton WWII 12.jpg"
import pic13 from "../assets/WW2/Norton WWII 13.jpg"
import pic14 from "../assets/WW2/Norton WWII 14.jpg"
import pic15 from "../assets/WW2/Norton WWII 15.jpg"
import pic16 from "../assets/WW2/Norton WWII 16.jpg"
import pic17 from "../assets/WW2/Norton WWII 17.jpg"
import pic18 from "../assets/WW2/Norton WWII 18.jpg"
import pic19 from "../assets/WW2/Norton WWII 19.jpg"

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
                        <b className="title1">World War 2</b>
                    </Divider>
                    <div>
                        <p fontSize="10"> <i>Click on any image to expand it</i> </p>
                    </div>

                    <div>

                        <Row gutter={[8, 16]}>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >




                                <Image style={{ height: 400 }}
                                    
                                    src={pic1}
                                />
                                
                                
                               
                            </Col>
                            <Col    xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}   >
                                <Image style={{ height: 400 }}
                                    


                                    src={pic2}
                                    
                                />
                               
                            </Col>
                            <Col   xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}

                                    
                                    src={pic3}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic4}
                                />
                               
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}   >
                                <Image style={{ height: 400 }}


                                    src={pic5}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic6}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }} 


                                    src={pic7}
                                />
                                
                            </Col>
                            

                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic8}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic9}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic10}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic11}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic12}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic13}
                                />
                                
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic14}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic15}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic16}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic17}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic18}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic19}
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
