import React from "react";
import Header from "../../containers/header/Header";
import "./home.css";
import yancenSmile from "../../media/img/22770839_10154784083416637_809336631829498962_o.jpg";
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  function changeToSpanish() {
    i18n.changeLanguage("es");
  }

  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  return (
    <>
      <Header />
      {/*<div className="container text">
        <img className="img" src={yancenSmile} alt="Yancen Smiling" />
        <strong>
          {t("home.welcome")}{" "}
          <a href="mailto:yd308@exeter.ac.uk">yd308@exeter.ac.uk</a>
        </strong>
        
        <p>Idioma acutal: {i18next.language}</p>
        <button onClick={changeToEnglish}>Cambiar a ingles</button>
        <button onClick={changeToSpanish}>Cambiar a español</button>
  </div>*/}
    </>
  );
};

export default Home;
