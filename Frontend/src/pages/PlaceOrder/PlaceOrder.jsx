import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import toast from "react-hot-toast";

const PlaceOrder = ({setshowPaymentGateway,setOrderData}) => {
  const { getTotalCartAmount, cartItems, token, food_list, url } =
    useContext(StoreContext);


  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: orderDetails,
      items: orderItems,
      amount: getTotalCartAmount() + 25,
    };

    setOrderData(orderData);
    setshowPaymentGateway(true);
    /*
    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Order Placed Successfully");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Cannot Place Order at the moment");
    }
      */
  };

  return (
      <form action="" className="place-order" onSubmit={handlePlaceOrder}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={orderDetails.firstName}
              onChange={onchangehandler}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={orderDetails.lastName}
              onChange={onchangehandler}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={orderDetails.email}
            onChange={onchangehandler}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={orderDetails.address}
            onChange={onchangehandler}
            required
          />
          <div className="multi-fields">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={orderDetails.city}
              onChange={onchangehandler}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={orderDetails.state}
              onChange={onchangehandler}
              required
            />
          </div>
          <div className="multi-fields">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={orderDetails.zipCode}
              onChange={onchangehandler}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={orderDetails.country}
              onChange={onchangehandler}
              required
            />
          </div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={orderDetails.phoneNumber}
            onChange={onchangehandler}
            required
          />
        </div>
        <div className="place-order-right">
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
            <button type="submit" className="payment-button">
              Proceed to Payment
            </button>
          </div>
        </div>
      </form>
  );
};

export default PlaceOrder;
