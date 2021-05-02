import React from "react";
import Topbar from "./Topbar";
import "../css/campmyles.css";
import { Footer as Bottom } from "./Footer";
import { Layout } from "antd";
import oldNort from "../assets/OldNort.jpg";
import { Divider, Card, Row, Col } from "antd";
import { Image } from "antd";
import campms from "../assets/CampMS.jpg";
import welcomeww2 from "../assets/WelcomeWW2.jpg";
import ThingPic from "./PictureWorks";
import pic1 from "../assets/CampMyles/1000000thsoldiermark.jpg"
import pic2 from "../assets/CampMyles/Baptism Watson Pond.jpg"
import pic3 from "../assets/CampMyles/Bids eye view of Camp Myles Standish.jpg"
import pic4 from "../assets/CampMyles/Cam pMyles Standish8.jpg"
import pic5 from "../assets/CampMyles/Camp Myles Standish 5.jpg"
import pic6 from "../assets/CampMyles/Camp Myles Standish 12.jpg"
import pic7 from "../assets/CampMyles/Camp Myles Standish 20.jpg"
import pic8 from "../assets/CampMyles/Camp Myles Standish 21.jpg"
import pic9 from "../assets/CampMyles/Camp Myles Standish bus.jpg"
import pic10 from "../assets/CampMyles/Camp Myles Standish cemetary.jpg"
import pic11 from "../assets/CampMyles/Camp Myles Standish Fire 1.jpg"
import pic12 from "../assets/CampMyles/Camp Myles Standish Fire 2.jpg"
import pic13 from "../assets/CampMyles/Camp Myles Standish Fire 3.jpg"
import pic14 from "../assets/CampMyles/Camp Myles Standish Fire 4.jpg"
import pic15 from "../assets/CampMyles/Camp Myles Standish Fire Headquarters.jpg"
import pic16 from "../assets/CampMyles/Camp Myles Standish fire1.jpg"
import pic17 from "../assets/CampMyles/Camp Myles Standish fire2.jpg"
import pic18 from "../assets/CampMyles/Camp Myles Standish fire3.jpg"
import pic19 from "../assets/CampMyles/Camp Myles Standish first building .jpg"
import pic20 from "../assets/CampMyles/Camp Myles Standish Hospital Headquaters.jpg"
import pic21 from "../assets/CampMyles/Camp Myles Standish Hospital Ramp.jpg"
import pic22 from "../assets/CampMyles/Camp Myles Standish housing.jpg"
import pic23 from "../assets/CampMyles/Camp Myles Standish lake.jpg"
import pic24 from "../assets/CampMyles/Camp Myles standish lisensce plate.jpg"
import pic25 from "../assets/CampMyles/Camp Myles Standish map.jpg"
import pic26 from "../assets/CampMyles/Camp Myles Standish map1.jpg"
import pic27 from "../assets/CampMyles/Camp Myles Standish map3.jpg"
import pic28 from "../assets/CampMyles/Camp Myles Standish people1.jpg"
import pic29 from "../assets/CampMyles/Camp Myles Standish people2.jpg"
import pic30 from "../assets/CampMyles/Camp Myles Standish people3.jpg"
import pic31 from "../assets/CampMyles/Camp Myles Standish people4.jpg"
import pic32 from "../assets/CampMyles/Camp Myles Standish Quatermaster's warehouse.jpg"
import pic33 from "../assets/CampMyles/Camp Myles Standish Tauton and Norton.jpg"
import pic34 from "../assets/CampMyles/Camp Myles Standish Watson's pond.jpg"
import pic35 from "../assets/CampMyles/Camp Myles Standish6.jpg"
import pic36 from "../assets/CampMyles/Camp Myles Standish7.jpg"
import pic37 from "../assets/CampMyles/Camp Myles Standish9.jpg"
import pic38 from "../assets/CampMyles/Camp Myles Standish10.jpg"
import pic39 from "../assets/CampMyles/Camp Myles Standish11.jpg"
import pic40 from "../assets/CampMyles/Camp Myles Standish13.jpg"
import pic41 from "../assets/CampMyles/Camp Myles Standish14.jpg"
import pic42 from "../assets/CampMyles/Camp Myles Standish15.jpg"
import pic43 from "../assets/CampMyles/Camp Myles Standish16.jpg"
import pic44 from "../assets/CampMyles/Camp Myles Standish17.jpg"
import pic45 from "../assets/CampMyles/Camp Myles Standish18.jpg"
import pic46 from "../assets/CampMyles/Camp Myles Standish19.jpg"
import pic47 from "../assets/CampMyles/Camp Myles Standish22.jpg"
import pic48 from "../assets/CampMyles/Camp Myles Standish23.jpg"
import pic49 from "../assets/CampMyles/Camp Myles Standish24.jpg"
import pic50 from "../assets/CampMyles/Camp Myles Standish25.jpg"
import pic51 from "../assets/CampMyles/Camp Myles Standish27.jpg"
import pic52 from "../assets/CampMyles/Camp Myles Standish28.jpg"
import pic53 from "../assets/CampMyles/Camp Myles Standish29.jpg"
import pic54 from "../assets/CampMyles/Camp Myles Standish30.jpg"
import pic55 from "../assets/CampMyles/Camp Myles Standish31.jpg"
import pic56 from "../assets/CampMyles/Camp Myles Standish32.jpg"
import pic57 from "../assets/CampMyles/Camp Myles Standish33.jpg"
import pic58 from "../assets/CampMyles/Camp Myles Standish34.jpg"
import pic59 from "../assets/CampMyles/Camp Myles Standish35.jpg"
import pic60 from "../assets/CampMyles/Camp Myles Standish36.jpg"
import pic61 from "../assets/CampMyles/Camp Myles Standish37.jpg"
import pic62 from "../assets/CampMyles/Camp Myles Standish1.jpg"
import pic63 from "../assets/CampMyles/Camp Myles Standish2.jpg"
import pic64 from "../assets/CampMyles/Camp Myles Standish3.jpg"
import pic65 from "../assets/CampMyles/Camp Myles Standish4.jpg"
import pic66 from "../assets/CampMyles/Col. Charles E. Barkshire.jpg"
import pic67 from "../assets/CampMyles/Second Myles Standish Train Wreck.jpg"
import pic68 from "../assets/CampMyles/Soldiers Marching Home.jpg"
import pic69 from "../assets/CampMyles/Taunton MA Bay St. 1992.jpg"
import pic70 from "../assets/CampMyles/Tauton MA Reuion.jpg"
import pic71 from "../assets/CampMyles/The End.jpg"
import pic72 from "../assets/CampMyles/WWII Camp spurrd lasting memories for many.jpg"

const { Content, Footer } = Layout;

class Home extends React.Component {
<<<<<<< HEAD
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
            <b className="title1">Camp Myles</b>
          </Divider>
          <div>
            <p>Click on any of the images below to learn more</p>
          </div>

          <div>
            <Row gutter={[8, 16]}>
              <Col span={24}>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                <p> Some text describing</p>
              </Col>

              <Col span={24}>
                <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
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
=======
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
                        <p fontSize="10"> <i>Click on any image to expand it</i> </p>
                    </div>

                    <div>

                        <Row gutter={[8, 16]}>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >




                                <Image style={{ height: 400 }}
                                    
                                    src={pic28}
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
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic20}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic21}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic22}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic23}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic24}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic25}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic26}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image style={{ height: 400 }}


                                    src={pic27}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image


                                    src={pic1}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic29}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic30}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic31}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic32}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic33}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic34}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic35}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic36}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic37}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic38}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic39}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic40}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic41}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic42}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic43}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic44}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic45}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic46}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic47}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic48}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic49}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic50}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic51}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic52}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic53}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic54}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic55}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic56}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic57}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic58}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic59}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic60}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic61}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic62}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic63}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic64}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic65}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic66}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic67}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic68}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic69}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic70}
                                />
                            </Col>
                            <Col  xs={7.5} sm={7.5}  md={7.5}  lg={7.5}  xl={12}  xxl={12}  >
                                <Image 


                                    src={pic71}
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
>>>>>>> 1c589ce8f5d8b0ab2b5a74e8551427b6834dcfbc
}

export default Home;
