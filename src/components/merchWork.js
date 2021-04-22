import React, { useState } from "react";
import "../css/storieswork.css";

import logo from "../assets/logo.png";
import { Divider, Modal, Card, Row, Col, Typography } from "antd";

import ReactDOM from "react-dom";
import "antd/dist/antd.css";

const { Title } = Typography;

function Thing(props) {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      className="cards"
      bordered={false}
      cover={<img className="cardpic" src={props.images} alt="Logo"></img>}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
}

export default Thing;
