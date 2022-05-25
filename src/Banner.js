import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-info">
        <h1>Where do you want to go? </h1>
        <input type="text" className="textbox" />
        <button className="button">GO</button>
      </div>
    </div>
  );
};

export default Banner;
