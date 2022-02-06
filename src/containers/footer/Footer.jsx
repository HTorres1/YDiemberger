import React from "react";
import "./footer.css";
import {IconContext} from "react-icons";
import {FaFacebook, FaInstagram, FaLinkedin }from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* <p>&copy; by Hugo Torres</p> */}
        <IconContext.Provider value={{ color: "white", size: 30 }}>
        <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>  
        <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
