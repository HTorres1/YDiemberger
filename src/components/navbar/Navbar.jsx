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
      <div id="navbar" className="container">
       {/*  <div className="hola">Holaa</div> */}
        <ul >
          <Link to="/">
            <li className="noselect" link to="/">
            {t("nav.nav1")}
            </li>
          </Link>
          <Link to="/about">
            <li className="noselect">
              {t("nav.nav2")}
            </li>
          </Link>
          <Link to="/PHD">
            <li
              className="noselect"
              /* onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}         */      
            >
              {t("nav.nav3")}
            </li>
          </Link>
          <Link to="/teaching">
            <li className="noselect">{t("nav.nav4")}</li>
          </Link>
          <Link to="/NGO">
            <li className="noselect">{t("nav.nav5")}</li>
          </Link>
          <Link to="/news">
            <li className="noselect">{t("nav.nav6")}</li>
          </Link>
          {/* <Link to="/gallery">
            <li className="noselect">Gallery</li>
          </Link> */}
          {/* <Link to="/contact">
            <li className="noselect">{t("nav.nav7")}</li>
          </Link> */}
        </ul>
      </div>
      <a className="change" onClick={changeToSpanish}>ESP</a>
      <a className="change" onClick={changeToEnglish}>ENG</a>
      {/* <img id="spa" src={spa} alt="Spanish" onClick={changeToSpanish}/>      
      <img id="uk" src={uk} alt="English" onClick={changeToEnglish}/> */}
    </div>
  );
};

export default Navbar;
