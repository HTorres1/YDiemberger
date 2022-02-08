import React from "react";
import "./teaching.css";
import studyondirt from "../../media/img/P1080958.JPG";
import dogonahorse from "../../media/img/IMG_20191105_165300.jpg";
import horseontheplains from "../../media/img/IMG_20191101_124655.jpg";
import { t } from "i18next";

const Teaching = () => {
  return (
    <div className="container-md">
      <h1>{t("teaching.teach_t1")}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: t("teaching.teach_p1") }}
        className="text"
      />
      <h1>{t("teaching.teach_t2")}</h1>
      <div>
        <img className="img odd" src={studyondirt} alt="Studying on the dirt" />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p2") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p3") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p4") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p5") }}
          className="text"
        />
        <a
        dangerouslySetInnerHTML={{ __html: t("teaching.teach_p6") }} 
        className="text" href="mailto:yd308@exeter.ac.uk"/>
      </div>
      <h1 id="teacher">{t("teaching.teach_t3")}</h1>
      <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p7") }}
          className="text"
        />
      <ul className="text">
        <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p8") }}/>
        <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p9") }}/>
        <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p10") }}/>
        <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p11") }}/>
        <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p12") }}/>
      </ul>
      <h1 id="horses">{t("teaching.teach_t4")}</h1>
      <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p13") }}
          className="text"
        />
        <img
          className="img"
          id="horsedog"
          src={horseontheplains}
          alt="Dog on a horse"
        />
      <h1>{t("teaching.teach_t5")}:</h1>
      <div>
      <img className="img pair" id="horsedog" src={dogonahorse} alt="Dog on a horse"/>
      <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p14") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p15") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p16") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p17") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p18") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p19") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p20") }}
          className="text"
        />
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p21") }}
          className="text"
        />
      </div>
    </div>
  );
};

export default Teaching;
