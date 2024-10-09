import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const FoodItem = ({ id, name, price, description, image, serve, type }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="" />
        {type === "Veg" ? (
          <img src={assets.VegIcon} className="veg-nonveg-icon" />
        ) : (
          <img src={assets.NonVegIcon} className="veg-nonveg-icon" />
        )}
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <h3>{name}</h3>
          <p className="food-item-desc">{description}</p>
        </div>

        <div className="food-item-price-serve">
          <p>Serve: {serve}</p>
          <p className="food-item-price">₹ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
