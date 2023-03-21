import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo"> SITAFAL.ai</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Vision">Vision</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
    </div>
  );
};
