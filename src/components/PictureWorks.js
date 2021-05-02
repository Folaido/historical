import React, { useState } from "react";

import { Modal, Card, Typography } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

function ThingPic(props) {
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
        bordered
        style={{ fontSize: 26 }}
        title={<Title level={4}>{props.title}</Title>}
        //link
        onClick={showModal}
        bordered={true}
        cover={<img src={props.image} alt="Logo"  />}
      >
        
      </Card>
      
    </>
  );
}

export default ThingPic;
