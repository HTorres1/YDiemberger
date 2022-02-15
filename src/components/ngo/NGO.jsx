import React from "react";
import "./ngo.css";
import dalai from "../../media/img/IMG_20220109_151846.jpg";
import dawa from "../../media/img/Collage_20220109_151058.jpg";
import stories from "../../media/img/banjakri copertina.jpg";
import fundraising2 from "../../media/img/IMG_20200718_193149.jpg";
import fundraising from "../../media/img/MammaPerDawa.jpg";
import limi from "../../media/img/Pano/limi.jpg";
/* import Earhquake from "../../media/img/NepalEarthquake.JPG"; */
import Earhquake from "../../media/img/NepalEarthquake2.JPG";
/* import Earhquake from "../../media/img/NepalEarthquake3.JPG"; */
import pano from "../../media/img/Pano/MountainFlags2.jpg";
import school from "../../media/img/NagaarkotLesson.jpg";



import { t } from "i18next";

const NGO = () => {
  return (
    <div className="container-md">
      <img className="panorama" id="top" src={pano} alt="Panorama" />
      <div className="row justify-content-md-center">
        <img
          className="col col-lg-5 nowrap"
          id="dalai"
          src={dalai}
          alt="Yancen Dalai"
        />
        <p
          dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p1") }}
          className="col col-lg-7 text"
        />
      </div>
      <h1 className="col col-lg-12">{t("ngo.ngo_t1")}</h1>
      <div className="row justify-content-md-center">
        
          <h2 className="col col-lg-12">{t("ngo.ngo_t2")}</h2>
          </div>
          <div className="row justify-content-md-center">
          <div
            dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p2") }}
            className="col col-lg-7 text"
          />
          <img
          id="school"
          className="col col-lg-5 nowrap"
          src={school}
          alt="School"
        />
          {/* <video width="320" height="240" className="col col-lg-4">
            <source
              src="../../media/vid/DhikureAndSteepleMordenSchool.mp4"
              type="video/mp4"
            ></source>
          </video> */}
        
      </div>
      <div className="row justify-content-md-center">
        <h2 className="col col-lg-12 nowrap">{t("ngo.ngo_t3")}</h2>
        <img
          className="col col-lg-5 nowrap"
          id="dawa"
          src={dawa}
          alt="Baby Dawa"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p3") }}
          className="col col-lg-7 text"
        />
      </div>
      <div className="row justify-content-md-center">
        <div>
          <h2 className="col col-lg-12 nowrap">{t("ngo.ngo_t4")}</h2>
        </div>
        <div className="row justify-content-md-center">
          <div
            dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p4") }}
            className="col col-lg-7 text"
          />
          <img
            className="col col-lg-5 nowrap"
            src={Earhquake}
            alt="Nepal Earthquake"
          />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <h2 className="col col-lg-12 nowrap">{t("ngo.ngo_t5")}</h2>
      </div>
      <div className="row justify-content-md-center">
        <img
          className="col col-lg-5 nowrap"
          src={stories}
          alt="Collecting stories"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p5") }}
          className="col col-lg-7 text"
        />
      </div>
      <div className="row justify-content-md-center">
        <h2 className="col col-lg-12">{t("ngo.ngo_t6")}</h2>
      </div>
      <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p6") }}
          className="col col-lg-12 text"
        />
      </div>
      <div className="row justify-content-md-center panoramix">
        <img className="col col-lg-12 nowrap" src={limi} alt="Fundraising" />
      </div>
      <div className="row justify-content-md-center ngolast">
        <h2 className="col col-lg-12 nowrap">{t("ngo.ngo_t7")}</h2>
        <img
          className="col col-lg-5 nowrap"
          src={fundraising2}
          alt="Fundraising"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("ngo.ngo_p7") }}
          className="col col-lg-7 text"
        />
        {/* <img
          className="col col-lg-6 nowrap"
          src={fundraising2}
          alt="Fundraising"
        /> */}
      </div>
    </div>
  );
};

export default NGO;
