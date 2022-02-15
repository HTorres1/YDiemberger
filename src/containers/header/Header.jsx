import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div id="hometext" className="container">
        {/* <h1 className="noselect">Yancen Diemberger</h1>
        <p className="uppercase">Horses, travel, climb, repeat...</p> */}
        <div id="homepres">
          {/* <h1 dangerouslySetInnerHTML={{ __html: t("home.home_t1")}}/> */}
          <h1 id="hello">
            <i>{t("home.home_t1")}</i> <br />
            {/* <a id="name" className="noselect" href="/about">
              {t("home.name")}
            </a> */}
            <Link to="/about">
            <a id="name" className="noselect">
              {t("home.name")}
            </a>
          </Link>
          </h1>

          {/* <h1 dangerouslySetInnerHTML={{ __html: t("home.name") }} /> */}
          <div dangerouslySetInnerHTML={{ __html: t("home.welcome") }} id="welcome" className="text"/>
            {/* Welcome to my website. Here you can find out about my research,
            teaching interests and activities. If you want to know more, please
            get in touch:{" "}
            <a href="mailto:yd308@exeter.ac.uk">yd308@exeter.ac.uk</a> */}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
/* 
<p
          dangerouslySetInnerHTML={{ __html: t("about.about_p1") }}
          className="col col-xxl-8 text"
        /> */
