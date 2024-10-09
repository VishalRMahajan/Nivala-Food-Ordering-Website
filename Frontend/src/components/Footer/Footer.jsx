import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className="logo" />
          <div className="footer-city">
            <h2>Currently Available in:</h2>
            <ul>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 99999-88888</li>
            <a
              href="mailto:contact.nivala@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>contact.nivala@gmail.com</li>
            </a>

            <div className="social">
              <a
                href="https://www.instagram.com/VishalRMahajan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill fontSize="1.75em" />
              </a>
              <a
                href="https://github.com/VishalRMahajan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub fontSize="1.75em" />
              </a>
              <a
                href="https://twitter.com/VishalRMahajan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter fontSize="1.75em" />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        Disclaimer: All food images used on this site are taken from the web.
        These images are used solely for educational project-related purposes,
        and the project will be made available as open source under the MIT
        License. We do not claim ownership of these images. All rights and
        trademarks of the images are owned by their respective copyright
        holders. For more information on the original source of each image,
        please use the "open image in new tab" feature to view the owner's
        details. If you are the owner of any image and would like it removed,
        please contact us{" "}
        <a
          href="mailto:contact.nivala@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>here</b>
        </a>
      </p>
    </div>
  );
};

export default Footer;
