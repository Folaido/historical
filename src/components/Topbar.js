import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import "../css/topbar.css";
import logo from "../assets/logo.png";

const Topbar = () => {
  const merchandise = {
    pathname: "/merchandise",
    key: Math.random(),
    state: {
      applied: true,
    },
  };
  const membership = {
    pathname: "/membership",
    key: Math.random(),
    state: {
      applied: true,
    },
  };
  //   const merchandise = {
  //     pathname: "/merchandise",
  //     key: Math.random(),
  //   };
  //   const merchandise = {
  //     pathname: "/merchandise",
  //     key: Math.random(),
  //   };

  const support = (
    <Menu
      sytle={{
        fontSize: "18px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <Menu.Item>
        <Link to={merchandise}>Store</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={membership}>Membership</Link>
      </Menu.Item>
    </Menu>
  );

  const visit = (
    <Menu
      sytle={{
        fontSize: "18px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <Menu.Item>
        <a href="/visit">Museum</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/tour">Town Tour</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="topbar">
      <div className="header">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className="menu">
          <a href="/stories">Stories</a>
          <Dropdown
            overlay={visit}
            overlayStyle={{ fontSize: 18, color: "#fff" }}
          >
            <a onClick={(e) => e.preventDefault()}>
              Visit <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown
            overlay={support}
            overlayStyle={{ fontSize: 18, color: "#fff" }}
          >
            <a onClick={(e) => e.preventDefault()}>
              Support <DownOutlined />
            </a>
          </Dropdown>
          <a href="/about">About</a>
          {/* <Menu
            style={{
              fontSize: "18px",
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              borderBottom: "none",
            }}
            theme="light"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            inlineIndent={24}
          >
            <Menu.Item key="Stories">
              <Link to="/stories">Stories</Link>
            </Menu.Item>

            <Menu.Item key="Visit">
              <Link to="/visit">Visit</Link>
            </Menu.Item>

            <Dropdown overlay={support}>Support</Dropdown>
            <Menu.Item key="Merchandise">
              <Link to="/merchandise">Merchandise</Link>
            </Menu.Item>

            <Menu.Item key="About">
              <Link to="/about">About Us</Link>
            </Menu.Item>
          </Menu> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
