import React, { useState } from "react";
import "./Sidebar.css";
import { IoIosAddCircle } from "react-icons/io";
import { FaListAlt, FaShoppingCart } from "react-icons/fa";
import { assets } from "../../assets/assets";

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
          <div className="sidebar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </div>
          <div className="sidebar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </div>
          <div className="sidebar-option">
            <FaShoppingCart className="icon" />
            <p>Add Items</p>
          </div>
        </div>
      </div>
      <div className="navbar">
        <img src={assets.greenlogo} alt="" className="navbar-logo" />
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`navbar-options ${isOpen ? "show" : ""}`}>
          <div className="navbar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </div>
          <div className="navbar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </div>
          <div className="navbar-option">
            <FaShoppingCart className="icon" />
            <p>Display Order</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;