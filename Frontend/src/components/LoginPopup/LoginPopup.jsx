import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { RxCross1 } from "react-icons/rx";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPopup = ({ setShowLogin }) => {
  const { url } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (currState === "Login") {
      newURL += "/api/auth/login";
    } else {
      newURL += "/api/auth/register";
    }

    try {
      const response = await axios.post(newURL, data);

      localStorage.setItem("token", response.data.token);
      if (currState === "Login") {
        toast.success("Login Successful");
      } else {
        toast.success("Registration Successful");
      }

      setShowLogin(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross1
            className="cross"
            fontSize="1.5em"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onchangehandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onchangehandler}
            value={data.email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="password"
            onChange={onchangehandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" className="checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
