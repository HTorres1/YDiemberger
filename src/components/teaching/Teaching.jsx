import React from "react";
import "./teaching.css";
import studyondirt from "../../media/img/teachingOnTheDirt.jpg";
import dogonahorse from "../../media/img/IMG_20191105_165300.jpg";
import horseontheplains from "../../media/img/IMG_20191101_124655.jpg";

//Panoramas
/* import pano from "../../media/img/Pano/SnowMountains.jpg"; */
import pano from "../../media/img/Pano/SchoolKids2.jpg";
/* import pano from "../../media/img/Pano/SchoolKids.jpg"; */
/* import pano from "../../media/img/Pano/MountainFlags2.jpg"; */
/* import pano from "../../media/img/Pano/MountainFlags.jpg"; */
/* import pano from "../../media/img/Pano/FireTent.jpg"; */

//Horses work
import HorseWork1 from "../../media/img/HorseWork/BoaloHorse.jpg";
import HorseWork2 from "../../media/img/HorseWork/DanceHorse.jpeg";
import HorseWork3 from "../../media/img/HorseWork/DesertHorse.jpeg";
import HorseWork4 from "../../media/img/HorseWork/DressHorse.jpg";
import HorseWork5 from "../../media/img/HorseWork/HorseJump.jpg";
import HorseWork6 from "../../media/img/HorseWork/HorseClouds.jpg";
import HorseWork7 from "../../media/img/HorseWork/HorseView.jpg";
import HorseWork8 from "../../media/img/HorseWork/NoirHorse.jpg";
import HorseWork9 from "../../media/img/HorseWork/PackingHorse.JPG";
import HorseWork10 from "../../media/img/HorseWork/Packing.JPG";
import HorseWork11 from "../../media/img/HorseWork/spur.jpg";
import HorseWork12 from "../../media/img/HorseWork/WalkingHorses.JPG";

import { t } from "i18next";

const Teaching = () => {
  return (
    <div className="container-md">
      <img className="panorama" id="top" src={pano} alt="Panorama" />
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12">{t("teaching.teach_t1")}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p1") }}
          className="text"
        />
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12">{t("teaching.teach_t2")}</h1>
        <img
          className="col col-lg-5 teachingOnTheDirt"
          src={studyondirt}
          alt="Studying on the dirt"
        />
        <div className="col col-xl-7">
          <div
            dangerouslySetInnerHTML={{ __html: t("teaching.teach_p2") }}
            className=" text"
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
          <br />
          <a
            dangerouslySetInnerHTML={{ __html: t("teaching.teach_p6") }}
            className="text"
            href="mailto:yd308@exeter.ac.uk"
          />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12" id="teacher">
          {t("teaching.teach_t3")}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p7") }}
          className="text"
        />
      </div>
      <div className="row justify-content-md-center">
        <ul className="text" id="TeachEx">
          <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p8") }} />
          <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p9") }} />
          <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p10") }} />
          <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p11") }} />
          <li dangerouslySetInnerHTML={{ __html: t("teaching.teach_p12") }} />
        </ul>
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12" id="horses">
          {t("teaching.teach_t4")}
        </h1>
      </div>
      <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p13") }}
          className="col col-xl-6 text"
        />
        <img
          className="col col-lg-6"
          id="horseplains"
          src={horseontheplains}
          alt="Horse on the plains"
        />
      </div>
      <div className="row justify-content-md-center">
        <h1 className="col col-lg-12">{t("teaching.teach_t5")}:</h1>
        </div>
        <div className="row justify-content-md-center">
        <div
          dangerouslySetInnerHTML={{ __html: t("teaching.teach_p14") }}
          className="col col-lg-12 text"
        />
      </div>
      <div className="row justify-content-md-center">
        <div id="teach_last" className="col col-lg-10">
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
      <div className="row justify-content-md-center teachLast">
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork1"
          src={HorseWork1}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork2"
          src={HorseWork2}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork8"
          src={HorseWork8}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork5"
          src={HorseWork5}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork4"
          src={HorseWork4}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork3"
          src={HorseWork3}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork7"
          src={HorseWork7}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork9"
          src={HorseWork9}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork6"
          src={HorseWork6}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork10"
          src={HorseWork10}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork11"
          src={HorseWork11}
          alt="Dog on a horse"
        />
        <img
          className="col col-lg-4 nomarg"
          id="HorseWork12"
          src={HorseWork12}
          alt="Dog on a horse"
        />
      </div>
    </div>
  );
};

export default Teaching;
