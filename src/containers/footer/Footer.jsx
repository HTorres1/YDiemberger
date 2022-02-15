import React from "react";
import "./footer.css";
import {IconContext} from "react-icons";
import {FaInstagram, FaLinkedin }from 'react-icons/fa';
import {FiMail }from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        {/* <p>&copy; by Hugo Torres</p> */}
        <IconContext.Provider value={{ color: "white", size: 30 }}>
        <a href='mailto:yd308@exeter.ac.uk' target="_blank"><FiMail /></a>
        <a><FaInstagram /></a>  
        <a href="https://www.linkedin.com/in/yancen-diemberger-35465622b/" target="_blank"><FaLinkedin /></a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
