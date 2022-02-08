import { t } from "i18next";
import React from "react";
import "./news.css";

const News = () => {
  return (
    <div className="container-md">
      <h1>{t("news.new_t1")}</h1>
      <div className="row justify-content-md-center"></div>
      <div 
        dangerouslySetInnerHTML={{ __html: t("news.new_p1") }}
        className="col col-sm-12 text"/>
    </div>
  );
};

export default News;
