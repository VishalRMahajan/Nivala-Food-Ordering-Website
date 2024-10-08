import React, { useState } from 'react'
import './LoginPopup.css'
import { RxCross1 } from "react-icons/rx";

const LoginPopup = ({setShowLogin}) => {
 
  const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className="login-popup">
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <RxCross1 className="cross" fontSize="1.5em" onClick={()=>setShowLogin(false)}/>
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" className="checkbox" required/>
                <p>I agree to the terms and conditions</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup