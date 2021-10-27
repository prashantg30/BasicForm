import React from "react";
import logo from "./logo2.png";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="img_component">
        <img src={logo} className="logo1" alt="ITF"></img>
      </div>
      <div className="top_component">
        <a>
          <Link className="link" to="/form">
            Form
          </Link>
        </a>
        <a>
          <Link to="/Status" className="link">
            Status
          </Link>
        </a>
      </div>
    </div>
  );
}
