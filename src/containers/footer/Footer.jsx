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
        <a href="https://www.facebook.com/"><FaFacebook /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>  
        <a href="https://www.linkedin.com/"><FaLinkedin /></a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
