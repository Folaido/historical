import React, { useState } from 'react';
import "../css/storieswork.css";

import logo from "../assets/logo.png";
import { Divider, Modal, Card, Row, Col, Typography } from 'antd';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


const { Title } = Typography;

function Thing1(props) {

    const { Meta } = Card;
   
    return (
        <>
            <Card  
            className="cardsMap"
            style={{ width: 250, fontSize: 20}} 
            cover={<img className="cardpicMap" src={props.images} alt="Logo" ></img>}        
            >
                <Meta title= {props.title} description={props.description}/>
            </Card>
          
        </>
    )
}

export default Thing1;
