import { React } from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import "../css/topbar.css";
import logo from "../assets/logo.png";

const Topbar = () => {
  const support = (
    <Menu
      sytle={{
        fontSize: "18px",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      }}
    >
      <Menu.Item>
        <Link to="/merchandise">Store</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/membership">Membership</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/volunteer">Volunteer</Link>
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
        <Link to="/visit">Museum</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/tour">Town Tour</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/gallery">Exhibition</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="topbar">
      <div className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menu">
          <Link to="/stories">Stories</Link>
          <Dropdown
            overlay={visit}
            trigger={['click']}
            overlayStyle={{ fontSize: 18, color: "#fff" }}
          >
            <a onClick={(e) => e.preventDefault()}>
              Visit <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown
            overlay={support}
            trigger={['click']}
            overlayStyle={{ fontSize: 18, color: "#fff" }}
          >
            <a onClick={(e) => e.preventDefault()}>
              Support <DownOutlined />
            </a>
          </Dropdown>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
