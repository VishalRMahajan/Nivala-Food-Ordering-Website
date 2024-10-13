import React, { useState } from "react";
import "./Sidebar.css";
import { IoIosAddCircle } from "react-icons/io";
import { FaListAlt, FaShoppingCart } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar">
        <img src={assets.whitelogo} alt="" className="logo" />
        <div className="sidebar-options">
          <NavLink to='/add' className="sidebar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </NavLink>
          <NavLink to='/list' className="sidebar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </NavLink>
          <NavLink to='/order' className="sidebar-option">
            <FaShoppingCart className="icon" />
            <p>Display Orders</p>
          </NavLink>
        </div>
      </div>
      <div className="navbar">
        <img src={assets.whitelogo} alt="" className="navbar-logo" />
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`navbar-options ${isOpen ? "show" : ""}`}>
          <NavLink to='/add' className="navbar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </NavLink>
          <NavLink  to='/list' className="navbar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </NavLink>
          <NavLink to='/order' className="navbar-option">
            <FaShoppingCart className="icon" />
            <p>Display Orders</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;