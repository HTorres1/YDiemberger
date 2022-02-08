import React from "react";
import "./ngo.css";
import dalai from "../../media/img/IMG_20220109_151846.jpg";
import dawa from "../../media/img/Collage_20220109_151058.jpg";
import stories from "../../media/img/banjakri copertina.jpg";
import fundraising from "../../media/img/IMG_20200718_193149.jpg";
import { t } from "i18next";

const NGO = () => {
  return (
    <div className="container-md">
      <div className="row justify-content-md-center">
        <img className="col col-sm-4 nowrap" src={dalai} alt="Yancen Dalai" />
        <p 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p1") }}
        className="col col-sm-8 text"/>
      </div>
      <h1>{t("ngo.ngo_t1")}</h1>

      <h2>{t("ngo.ngo_t2")}</h2>
      <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p2") }}
        className="col col-sm-12 text"/>
      <div className="text">        
        <h2>{t("ngo.ngo_t3")}</h2>
        <img className="img odd" src={dawa} alt="Baby Dawa" />
        <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p3") }}
        className="col col-sm-12 text"/>
      </div>      
      <div className="text">
        <h2>{t("ngo.ngo_t4")}</h2>
        <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p4") }}
        className="col col-sm-12 text"/>
      </div>
      <div className="text">
        <h2>{t("ngo.ngo_t5")}</h2>
        <img className="img pair" src={stories} alt="Collecting stories" />
        <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p5") }}
        className="col col-sm-12 text"/>
        
      </div>
      <div className="text">
        <h2>{t("ngo.ngo_t6")}</h2>
        <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p6") }}
        className="col col-sm-12 text"/>
      </div>
      <div className="text">
        <img className="img odd" src={fundraising} alt="Fundraising" />
        <h2>{t("ngo.ngo_t7")}</h2>
        <div 
        dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p7") }}
        className="col col-sm-12 text"/>
      </div>
    </div>
  );
};

export default NGO;
