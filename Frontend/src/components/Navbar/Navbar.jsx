import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalItemsCount, token,setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-icons">
          <FaSearch className="search-icon" fontSize="1.5em" />
          <div className="navbar-cart-icon">
            <Link to="/cart">
              {" "}
              <FaShoppingCart fontSize="1.5em" />
            </Link>
            <div className={getTotalItemsCount() === 0 ? "" : "dot"}>
              {getTotalItemsCount() === 0 ? "" : getTotalItemsCount()}
            </div>
          </div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <CgProfile fontSize="2em" />
            <ul className="nav-profile-dropdown">
              <li><FaShoppingCart fontSize="1.5em" /><p>Orders</p></li>
              <hr/>
              <li onClick={logout}><IoLogOut fontSize="1.5em"/><p>Logout</p></li>
            </ul>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
