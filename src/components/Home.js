import { React, useEffect } from "react";
import Topbar from "./Topbar";
import "../css/home.css";
import { Footer as Bottom } from "./Footer";
import { Layout, Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { Content, Footer } = Layout;
  let carousel;
  const onPrevClick = () => {
    carousel.prev();
  };
  const onNextClick = () => {
    carousel.next();
  };
  return (
    <Layout className="layout">
      <Topbar selectedKey={"Home"} />
      <Content>
        <LeftCircleOutlined className="prev-btn" onClick={onPrevClick} />
        <Carousel className="carousel" ref={(c) => (carousel = c)} autoplay>
          <div className="container">
            <img src={home1} alt="first" />
          </div>
          <div className="container">
            <img src={home2} alt="second" />
          </div>
          <div className="container">
            <img src={home3} alt="third" />
          </div>
          <div className="container">
            <img src={home4} alt="fourth" />
          </div>
        </Carousel>
        <RightCircleOutlined className="next-btn" onClick={onNextClick} />
        <div className="home-content">
          <h1>NORTON HISTORICAL SOCIETY</h1>
          <p>
            We are 501(c)(3) non-profit corporation dedicated to “preserving
            material relative to the history of Norton.”
          </p>
          <p className="bold" style={{ display: "inline" }}>
            Recent Update:{" "}
          </p>
          <p style={{ display: "inline" }}>
            The Museum is current close due to COVID-19 pandemic
          </p>
          <p>Email or call to connect us</p>
          <p className="bold">nortonhistoricalsociety@verizon.net</p>
          <p className="bold">(508)285-7070</p>

          <div className="card-holder">
            <Link className="h-card card1" to="/visit">
              <h1>Visit Norton Historical Museum</h1>
              <div>
                <p>Visiting the Norton historical museum.</p>
              </div>
            </Link>
            <Link className="h-card card2" to="/merchandise">
              <h1>Support Norton History</h1>
              <div>
                <p>
                  Your support, in any form or amount, is integral to helping
                  advance our mission.
                </p>
              </div>
            </Link>
            <Link className="h-card card3" to="/about">
              <h1>This Place in History</h1>
              <div>
                <p>Exporing the history of the town.</p>
              </div>
            </Link>
          </div>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
};

export default Home;
