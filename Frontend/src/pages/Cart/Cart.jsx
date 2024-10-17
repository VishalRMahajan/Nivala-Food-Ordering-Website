import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import axios from "axios";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    promoCode,
    setPromoCode,
    discount,
    setDiscount,
    discountApplied,
    setDiscountApplied,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleApplyPromoCode = async () => {
    try {
      const response = await axios.post(`${url}/api/promo/check`, {
        promoCode,
      });
      const promo = response.data;
      console.log(promo);
      if (promo.success) {
        if (promo.data.discountType === "percentage") {
          setDiscountApplied(true);
          setDiscount((getTotalCartAmount() * promo.data.discount) / 100);
        } else if (promo.data.discountType === "amount") {
          setDiscountApplied(true);
          setDiscount(promo.data.discount);
        }
        toast.success("Promo Code Applied Successfully");
      } else {
        toast.error("Promo Code Invalid");
      }
    } catch (error) {
      toast.error("Error applying promo code");
      console.error("Error applying promo code:", error);
    }
  };

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
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-item cart-items-title">
                  <img
                    className="food-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <div className="remove">
                    <img
                      src={assets.remove_icon_red}
                      onClick={() => removeFromCart(item._id)}
                      alt="Remove"
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      src={assets.add_icon_green}
                      onClick={() => addToCart(item._id)}
                      alt="Add"
                    />
                  </div>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
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
              <p>Discount</p>
              <p>₹ {discount}</p>
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
                ₹{" "}
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + 25 - discount}
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
            <p className="cart-promocode-desc">
              If you have a promo code, enter it here:
            </p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="Enter Promocode here"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromoCode}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
