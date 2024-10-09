import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item cart-items-title">
                  <img className="food-image" src={item.image} />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <div className="remove">
                    <img
                      src={assets.remove_icon_red}
                      onClick={() => removeFromCart(item._id)}
                      alt=""
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      src={assets.add_icon_green}
                      onClick={() => addToCart(item._id)}
                      alt=""
                    />
                  </div>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          {getTotalCartAmount() < 100 ? (
            <div>
              <h2>Cart Totals</h2>
              <p style={{"margin-top": "5px"}}>To Procced to Checkout, Add items worth  ₹100 or more</p>
            </div>
          ) : (
            <h2>Cart Totals</h2>
          )}
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : 25}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 25}
              </p>
            </div>
            <hr />
          </div>
          {getTotalCartAmount() < 100 ? (
            <button
              onClick={() => navigate("/placeorder")}
              disabled
              style={{ backgroundColor: "grey", cursor: "not-allowed" }}
            >
              Proceed to Checkout
            </button>
          ) : (
            <button onClick={() => navigate("/placeorder")}>
              Proceed to Checkout
            </button>
          )}
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>

            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promocode here" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
