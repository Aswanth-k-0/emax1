import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <p>FOLLOW US</p>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.facebook.com">Facebook</a>
        </div>
        <div className="contact">
          <p>REACH US</p>
          <p>8075 762 170</p>
          <p>abc@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
