import React, { useState } from "react";

import { Modal, Card, Typography } from "antd";
import "antd/dist/antd.css";

const { Title } = Typography;

function Thing(props) {
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
        //hoverable
        bordered
        style={{ width: 250, fontSize: 22 }}
        title={<Title level={4}>{props.title}</Title>}
        //onClick={showModal}
        bordered={false}
        cover={<img src={props.image} alt="Logo" width="245" height="300"  />}
      >
        <p>{props.name}</p>
      </Card>
      <Modal
        title={props.mtitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ zIndex: "9999999" }}
      >
        <p>Ruth Goold became president of the NHS in 1999 </p>
        <p>For 20 years prior she acted as secretary to her husband George Yelle. At that time she was known as a devoted worker who was said to be the driving force behind NHS</p>
       
        <p> A fun fact about Ruth is that she attended Nortons very own Wheaton College and received a Masters degree in teaching.</p>
        
      </Modal>
    </>
  );
}

export default Thing;
