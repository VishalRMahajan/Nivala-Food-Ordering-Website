import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Nivala Logo" />
      <CgProfile className="profile" font-size ="40px" />

    </div>
  );
};

export default Navbar;
