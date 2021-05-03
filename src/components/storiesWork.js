import React, { useState } from "react";
import "../css/storieswork.css";

import logo from "../assets/logo.png";
import { Divider, Modal, Card, Row, Col, Typography } from "antd";

import ReactDOM from "react-dom";
import "antd/dist/antd.css";

const { Title } = Typography;

function Thing(props) {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Card
        hoverable
        className="cards"
        style={{ width: 250, fontSize: 20 }}
        onClick={showModal}
        bordered={false}
        cover={<img className="cardpic" src={props.images} alt="Logo"></img>}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
      <Modal
        title={props.mtitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modal">
          <img className="modalpic" src={props.modImage}></img>
          <p>{props.content}</p>
        </div>
      </Modal>
    </>
  );
}

export default Thing;
