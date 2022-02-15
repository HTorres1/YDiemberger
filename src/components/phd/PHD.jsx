import React from "react";
import "./phd.css";
import { t } from "i18next";

//Img
/* import pano from "../../media/img/horsesonthegrass.jpg"; */
import pano from "../../media/img/horseears.jpg";
import manuscript from "../../media/img/foaling.jpg";
import horsegrass from "../../media/img/horsesonthegrass.jpg";
import nepalhorse from "../../media/img/nepal_horse.jpg";

const PHD = () => {
  return (
    <div className="container-md">
      <img className="panorama" src={pano} alt="Panorama" />
      <h1 className="col col-lg-12">{t("phd.phd_t1")}</h1>
      <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("phd.phd_p1") }}
          className="col col-lg-12 text"
        />
        </div>
          <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("phd.phd_p2") }}
          className="col col-lg-12 text"
        />
      </div>
      <div className="row justify-content-md-center">
        <img
          className="col col-lg-6 text nepal_horse"
          src={nepalhorse}
          alt="nepalhorse"
        />
        <div className="col col-lg-6 text">
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p3") }}
            className="text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p4") }}
            className="text"
          />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("phd.phd_p5") }}
          className="col col-lg-12 text"
        />
      </div>
      <br />
      <div className="row justify-content-md-center">
        <iframe
          className="col col-lg-6"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9pI3NEu6FPM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        />
      </div>
      <div className="row justify-content-md-center">
        <h1 id="manuscript" className="col col-lg-12">{t("phd.phd_t2")}</h1>
        <div className="row justify-content-md-center">
          <img className="col col-lg-8" src={manuscript} alt="Manuscript" />
          <h4 className="col col-lg-7">{t("phd.phd_t2_1")}</h4>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: t("phd.phd_p6") }}
          className="col col-lg-12 text"
        />
      </div>
      <div className="row justify-content-md-center panoramix">
        <img
          className="col col-lg-12"
          src={horsegrass}
          alt="Horses on the grass"
        />
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12">{t("phd.phd_t3")}</h1>
        <div id="Publications">
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p7") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p8") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p9") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p10") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p11") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p12") }}
            className="col col-lg-12 text"
          />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <h1 id="Presentations" className="col col-lg-12">
          {t("phd.phd_t4")}
        </h1>
        <div id="phd_last">
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p13") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p14") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p15") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p16") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p17") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p18") }}
            className="col col-lg-12 text"
          />
          <div
            dangerouslySetInnerHTML={{ __html: t("phd.phd_p19") }}
            className="col col-lg-12 text"
          />
        </div>
      </div>
    </div>
  );
};

export default PHD;
