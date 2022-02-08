import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";
import spa from "../../media/ico/spain.png"
import uk from "../../media/ico/united-kingdom.png"
import usa from "../../media/ico/usa.png"

const Navbar = () => {
  /* const [dropdown, setDropdown] = useState(false);  */
  const {t, i18n} = useTranslation();
  

   function changeToSpanish () {
    i18n.changeLanguage("es");
  } 

  function changeToEnglish () {
    i18n.changeLanguage("en");
  }

  return (
    <div className="nav">
      <img id="spa" src={spa} alt="Spanish" onClick={changeToSpanish}/>
      {/* <img id="usa" src={usa} alt="English" onClick={changeToEnglish}/> */}
      <img id="uk" src={uk} alt="English" onClick={changeToEnglish}/>
      <div className="container">
       {/*  <div className="hola">Holaa</div> */}
        <ul>
          <Link to="/">
            <li className="noselect" link to="/">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="noselect" link to="/about" onHover={console.log("Holaaaaaaaaaa")}>
              About
            </li>
          </Link>
          <Link to="/PHD">
            <li
              className="noselect"
              /* onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}         */      
            >
              PHD/Research
            </li>
          </Link>
          <Link to="/teaching">
            <li className="noselect">Teaching</li>
          </Link>
          <Link to="/NGO">
            <li className="noselect">NGO / Charity</li>
          </Link>
          <Link to="/news">
            <li className="noselect">News and Currently activiy</li>
          </Link>
          {/* <Link to="/gallery">
            <li className="noselect">Gallery</li>
          </Link> */}
          <Link to="/contact">
            <li className="noselect">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
