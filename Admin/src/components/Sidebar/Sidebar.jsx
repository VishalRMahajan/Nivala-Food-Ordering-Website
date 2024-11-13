import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { IoIosAddCircle } from "react-icons/io";
import { FaListAlt, FaShoppingCart, FaRegMoneyBillAlt } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, setToken, setIsAuthenticated } = useContext(StoreContext);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar">
        <img src={assets.whitelogo} alt="" className="logo" />
        <div className="sidebar-options">
          <NavLink to="/add" className="sidebar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="sidebar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </NavLink>
          <NavLink to="/order" className="sidebar-option">
            <FaShoppingCart className="icon" />
            <p>Display Orders</p>
          </NavLink>
          <NavLink to="/promo" className="sidebar-option">
            <FaRegMoneyBillAlt className="icon" />
            <p>Promo Code</p>
          </NavLink>
        </div>
        {isAuthenticated && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div className="navbar">
        <img src={assets.whitelogo} alt="" className="navbar-logo" />
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`navbar-options ${isOpen ? "show" : ""}`}>
          <NavLink to="/add" className="navbar-option">
            <IoIosAddCircle className="icon" />
            <p>Add Items</p>
          </NavLink>
          <NavLink to="/list" className="navbar-option">
            <FaListAlt className="icon" />
            <p>List Items</p>
          </NavLink>
          <NavLink to="/order" className="navbar-option">
            <FaShoppingCart className="icon" />
            <p>Display Orders</p>
          </NavLink>
          <NavLink to="/promo" className="navbar-option">
            <FaRegMoneyBillAlt className="icon" />
            <p>Promo Code</p>
          </NavLink>
          {isAuthenticated && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        </div>
       
      </div>
    </>
  );
};

export default Sidebar;