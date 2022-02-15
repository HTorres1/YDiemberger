import { t } from "i18next";
import React from "react";
import "./news.css";

import Sunset from "../../media/img/SunsetHorses.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="container-md">
      <img className="panorama" src={Sunset} alt="Panorama" />
      <div className="row justify-content-md-center newslast">
        <h1>{t("news.news_t1")}</h1>

        <div className="col col-sm-12 text">          
          {t("news.news_p1")}
          <Link to="/teaching"><a>{t("news.news_p1a")}</a></Link>
          {t("news.news_p1b")}
          <Link to="/teaching"><a>{t("news.news_p1c")}</a></Link>
          {t("news.news_p1d")}
          <a href='mailto:yd308@exeter.ac.uk' target='_blank'>{t("news.news_p1e")}</a>
        </div>
      </div>
    </div>
  );
};

export default News;
