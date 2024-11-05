import React from "react";
import { assets } from "../../assets/assets";
import "./Coupon.css";

const Coupon = () => {
  return (
    <div className="Coupon">
      <h2>Available Offers</h2>
      <p className="Coupon-description">Check out our latest discounts and deals!</p>
      <div className="Coupon-grid">
        <img src={assets.Coupon1} alt="Coupon 1" />
        <img src={assets.Coupon2} alt="Coupon 2" />
        <img src={assets.Coupon3} alt="Coupon 3" />
      </div>
    </div>
  );
};

export default Coupon;