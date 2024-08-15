import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" className='logo' />
                <p className='footer-desc'>At Nivala, we bring you the comforting flavors of "Ghar Ka Swaad" right to your doorstep. Our mission is to connect you with homemade, nutritious meals that remind you of the warmth and love of home cooking. Discover a variety of dishes from across India, crafted with care by local chefs who share our passion for authentic, homestyle food.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 00000 00000</li>
                    <li>contact.nivala@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            <p>&copy; 2024 Nivala. All Rights Reserved</p>
        </p>  
      
    </div>
  )
}

export default Footer
