import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum nam facilis non error iste. Rem, atque unde vel quis similique ut necessitatibus quos aliquam corrupti, inventore, cumque ipsam laudantium.</p>
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
                    <li>contact@nivala.dup</li>
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
