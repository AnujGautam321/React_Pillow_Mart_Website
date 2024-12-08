import React from "react";
import "./HeroStyles.css";
import goodVibesImg from "./banner 1.png";
import dotDotImg from "./dotdot.png";

const Hero = () => {
  return (
    <div className="hero-main-div">
      <div className="hero-first-div">
        <div className="rectangle"></div>
        <div className="best-quality">
          <h1>Best quality pillow</h1>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal
          </p>
          <button className="hero-button">Shop now</button>
        </div>
      </div>
      <div className="hero-second-div">
          <img src={goodVibesImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
