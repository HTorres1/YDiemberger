import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        {/* <h1 className="noselect">Yancen Diemberger</h1>
        <p className="uppercase">Horses, travel, climb, repeat...</p> */}
        <div  id="homepres">
        Welcome to my personal website. Here you can learn more about my
        research, teaching, interests and activities. If you want to learn more,
        please get in touch: {" "}<a href="mailto:yd308@exeter.ac.uk">yd308@exeter.ac.uk</a>
      </div>
      </div>
    </div>
  );
};

export default Header;
