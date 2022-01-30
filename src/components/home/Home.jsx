import React from "react";
import Header from "../../containers/header/Header";
import "./home.css";
import yancenSmile from "../../media/img/FB_IMG_1641737057345.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text">
        <img className="img" src={yancenSmile} alt="Yancen Smiling"/>
        Welcome to my personal website. Here you can learn more about my
        research, teaching, interests and activities. If you want to learn more,
        please get in touch: yd308@exeter.ac.uk
      </div>
    </>
  );
};

export default Home;
