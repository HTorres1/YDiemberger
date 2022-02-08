import React from "react";
import "./about.css";
import { t } from "i18next";

//Img
import youngYancen from "../../media/img/IMG_20220110_145648.jpg";
import teachYancen from "../../media/img/12079895_10153000518721637_2996482290262450025_o.jpeg";
import templeHorses from "../../media/img/P1090371.JPG";
import aridHorse from "../../media/img/IMG-20190106-WA0034-1.jpg";

const About = () => {
  return (
    <div className="container-md">
      <div className="row justify-content-md-center">
        <img className="col col-sm-3" src={youngYancen} alt="Young Yancen" />
        <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p1") }}
          className="col col-sm-9 text"
        />
      </div>
      <div className="row justify-content-md-center">
        <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p2") }}
          className="col col-lg-8 text"
        />          
        <img className="col col-lg-4" src={teachYancen} alt="Teach Yancen" />
      </div>
      <div className="row justify-content-md-center">
        <img className="col col-lg-4" src={templeHorses} alt="Teach Yancen" />
        <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p3") }}
          className="col col-lg-8 text"
        />
      </div>
      <div className="row justify-content-md-center">
      <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p4") }}
          className="col col-lg-8 text"
        />
        <img className="col col-lg-4" src={aridHorse} alt="Teach Yancen" />
      </div>
      {/* <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">1</div>
          <div className="col-4">2</div>
          <div className="col-4">3</div>
        </div>
        <div className="row">
          <div className="col-6">1</div>
          <div className="col-6">2</div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
