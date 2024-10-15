import React, { useContext } from "react";
import "./PaymentGateway.css";
import { StoreContext } from "../../context/StoreContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentGateway = ({ orderData, setshowPaymentGateway }) => {
  const navigate = useNavigate();
  const { url, token } = useContext(StoreContext);

  const handlepayment = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setshowPaymentGateway(false);
      navigate("/");
      toast.success("Order Placed Successfully");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Cannot Place Order at the moment");
    }
  };

  return (
    <div className="gateway-popup">
      <form onSubmit={handlepayment} className="gateway-popup-container">
        <h3>Nivala Payment Gateway</h3>
        <div className="gateway-input">
          <input
            type="text"
            placeholder="UPI ID"
            value="test@bank"
            disabled
            required
          />
          <input
            type="text"
            placeholder="Amount"
            value={orderData.amount}
            disabled
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentGateway;