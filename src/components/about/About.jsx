import React from "react";
import "./about.css";
import { t } from "i18next";
import { Link } from "react-router-dom";

//Img
import youngYancen from "../../media/img/IMG_20220110_145648.jpg";
import teachYancen from "../../media/img/YancenTeaching.jpeg";
import templeHorses from "../../media/img/TempeHorses2.jpg";
import aridHorse from "../../media/img/YancenSandRiding2.jpg";
import ClimbingYancen from "../../media/img/YancenClimbing2.jpeg";
/* import ClimbingYancen from "../../media/img/YancenClimbing2.jpeg"; */
import SunsetYancen from "../../media/img/YancenSunset.jpg";
import YancenGym from "../../media/img/YancenRoco2.jpeg";
import YancenDancing from "../../media/img/YancenDancing.jpeg";
import SunsetBridge from "../../media/img/SunsetBridge.jpg";

const About = () => {
  return (
    <div className="container-md">      
      <div className="row justify-content-xxl-center">
        <img
          id="youngYancen" className="col col-lg-4"
          src={youngYancen}
          alt="Young Yancen"
        />
        {/* <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p1") }}
          className="col col-lg-8 text"
        /> */}
        <p className="col col-lg-8 text">
          {t("about.about_p1")}
          <Link to="/teaching#horses"><a>{t("about.about_p1a")}</a></Link>
          {t("about.about_p1b")}
        </p>
      </div>
      <div className="row justify-content-md-center">
        <p className="col col-lg-7 text">
          {t("about.about_p2")}
          <Link to="/teaching#teacher"><a>{t("about.about_p2a")}</a></Link>
          {t("about.about_p2b")}
          <Link to="/ngo"><a>{t("about.about_p2c")}</a></Link>
          {t("about.about_p2d")}
        </p>
        <img id="teachYancen" className="col col-lg-5" src={teachYancen} alt="Teach Yancen" />
      </div>
      <div className="row justify-content-md-center">
        <img id="templeHorses" className="col col-lg-5" src={templeHorses} alt="Temple horses" />
        <p className="col col-lg-7 text">
          {t("about.about_p3")}
          <Link to="/phd"><a>{t("about.about_p3a")}</a></Link>
          {t("about.about_p3b")}
          <a href='https://www.hf.uio.no/ikos/english/research/projects/himalayas/' target='_blank'>{t("about.about_p3c")}</a>
          {t("about.about_p3d")}
        </p>
      </div>
      <div id="about_last" className="row justify-content-md-center">
        <p className="col col-lg-8 text">
        {t("about.about_p4")}
          <Link to="/teaching"><a>{t("about.about_p4a")}</a></Link>
          {t("about.about_p4b")}
          <Link to="/phd"><a>{t("about.about_p4c")}</a></Link>
          {t("about.about_p4d")}
          <a href='http://socialsciences.exeter.ac.uk/sociology/staff/hurn/' target='_blank'>{t("about.about_p4e")}</a>
        </p>
        <img id="aridHorse" className="col col-lg-4" src={aridHorse} alt="Riding Yancen" />
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12">{t("about.about_t1")}</h1>
      </div>
      <div className="row justify-content-md-center panoramix">
        <img
          id="SunsetBridge"
          className="col col-lg-12 nowrap"
          src={SunsetBridge}
          alt="Sunset Bridge"
        />
      </div>
      <div className="row justify-content-md-center">
        <h2 className="col col-lg-12 nowrap">{t("about.about_t2")}</h2>
        <img
          id="YancenClimbingGym"
          className="col col-lg-6 nowrap"
          src={YancenGym}
          alt="Yancen Climbing Gym"
        />
        <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p5") }}
          className="col col-lg-6 text"
        />
      </div>
      <div className="row justify-content-md-center panoramix">
        <img
          id="ClimbingYancen"
          className="col col-lg-12 nowrap"
          src={ClimbingYancen}
          alt="Yancen Climbing"
        />
      </div>
      <div className="row justify-content-md-center">
        <h2 className="col col-lg-12 nowrap">{t("about.about_t3")}</h2>
      </div>
      <div className="row justify-content-md-center">
        <p
          dangerouslySetInnerHTML={{ __html: t("about.about_p6") }}
          className="col col-lg-6 text"
        />
        <img
          id="YancenDancing"
          className="col col-lg-6 nowrap"
          src={YancenDancing}
          alt="Yancen Dancing"
        />
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
