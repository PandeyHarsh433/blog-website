import React from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav style={navbarStyles}>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <h1 style={titleStyles}>{title}</h1>
      </Link>
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <FaHome style={iconStyles} />
      </Link>
      <Link to="/addBlog" style={{ textDecoration: "none", color: "white" }}>
        <FaPlus style={iconStyles} />
      </Link>
    </nav>
  );
};

const navbarStyles = {
  background: "#333",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60px",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  padding: "0 20px",
};

const titleStyles = {
  margin: "0",
  fontSize: "24px",
};

const iconStyles = {
  fontSize: "36px",
  cursor: "pointer",
};

export default Navbar;
