import React from "react";
import "./footer.css";
import {IconContext} from "react-icons";
import {FaInstagram, FaLinkedin }from 'react-icons/fa';
import {FiMail }from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
       {/*  <a id="hugo" href="https://www.linkedin.com/in/hugo-torres-de-la-casa-a11568178/" target="_blank">by Hugo Torres</a> */}
        <IconContext.Provider value={{ color: "white", size: 30 }}>
        <a href='mailto:yd308@exeter.ac.uk' target="_blank"><FiMail /></a>
        <a href="https://instagram.com/yancen_diemberger" target="_blank"><FaInstagram /></a>  
        <a href="https://www.linkedin.com/in/yancen-diemberger-35465622b/" target="_blank"><FaLinkedin /></a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
