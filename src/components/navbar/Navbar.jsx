import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assests/logo.svg";

const Navbar = () => {
  return (
    <div className="webt__nav">
      <div className="webt__navbar-links">
        <div className="webt__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="webt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatWebTemp">What is WebTemp</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="webt__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
