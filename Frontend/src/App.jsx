import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home.jsx";
import Cart from "@/pages/Cart/Cart.jsx";
import PlaceOrder from "@/pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import PaymentGateway from "./components/PaymentGateway/PaymentGateway";
import toast, { Toaster } from "react-hot-toast";
import { StoreContext } from "./context/StoreContext";
import axios from "axios";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPaymentGateway, setshowPaymentGateway] = useState(false);
  const [orderData,setOrderData] = useState({})
  const {url} =useContext(StoreContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}`);
        console.log(res);
        toast.success(res.data.message);
        clearInterval(intervalId); 
      } catch (error) {
        console.error("Error connecting to server");
        toast("Backend Server Take a while to Wake up, Please Wait!" , {icon: "⏳"} );
      }
    };

    const intervalId = setInterval(fetchData, 30000); 

    fetchData();

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      {showPaymentGateway ? <PaymentGateway orderData={orderData} setshowPaymentGateway={setshowPaymentGateway}/>  : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder setshowPaymentGateway={setshowPaymentGateway} setOrderData={setOrderData}/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
