import React from "react";
import "./phd.css";
import { t } from "i18next";

//Img
import pano from "../../media/img/20171020_173953.jpg";
import manuscript from "../../media/img/foaling.jpg";

const PHD = () => {
  return (
    <div className="container-md">
      <img className="panorama" src={pano} alt="Panorama" />
      <h1>{t("phd.phd_t1")}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p1") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p2") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p3") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p4") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p5") }}
        className="text"
      />
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9pI3NEu6FPM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <h1>{t("phd.phd_t2")}</h1>
      <img className="img" src={manuscript} alt="Manuscript" />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p6") }}
        className="text"
      />
      <h1>{t("phd.phd_t3")}</h1>
      <div>
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p7") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p8") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p9") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p10") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p11") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p12") }}
        className="text"
      />
      <h1>{t("phd.phd_t4")}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p13") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p14") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p15") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p16") }}
        className="text"
      />      
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p17") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p18") }}
        className="text"
      />
      <div
        dangerouslySetInnerHTML={{ __html: t("phd.phd_p18") }}
        className="text"
      />
      </div>
    </div>
  );
};

export default PHD;
