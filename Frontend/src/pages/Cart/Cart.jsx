import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

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
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item cart-items-title">
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                  <MdDelete
                    onClick={() => removeFromCart(item._id)}
                    className="remove"
                    fontSize="1.5rem"
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount()===0?0:25}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹ {getTotalCartAmount()===0?0:getTotalCartAmount()+25}</p>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/placeorder')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter Promocode here"/>
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
