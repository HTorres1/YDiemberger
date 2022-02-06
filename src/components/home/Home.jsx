import React from "react";
import Header from "../../containers/header/Header";
import "./home.css";
import yancenSmile from "../../media/img/22770839_10154784083416637_809336631829498962_o.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text">
        <img className="img" src={yancenSmile} alt="Yancen Smiling"/>
        Welcome to my personal website. Here you can learn more about my
        research, teaching, interests and activities. If you want to learn more,
        please get in touch: {" "}<a href="mailto:yd308@exeter.ac.uk">yd308@exeter.ac.uk</a>
      </div>
    </>
  );
};

export default Home;
