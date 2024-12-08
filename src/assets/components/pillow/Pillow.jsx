import React from "react";
import "./PillowStyles.css";
import pillow1Img from "./pillow1.png";
import pillow2Img from "./pillow2.png";
import pillow3Img from "./pillow3.png";

const Pillow = () => {
  return (
    <div className="pillow-main-div">

      <div className="pillow-first-div">
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={pillow1Img} alt="" />
            </div>
            <div className="image-stack bottom"></div>
          </div>
        </div>
        <div className="pillow1-details">
          <p>Started from $10</p>
          <h2>Printed memory foam brief modern throw pillow case</h2>
          <button>EXPLORE NOW</button>
        </div>
      </div>

      <div className="pillow-second-div">
        <div className="pillow2-details">
          <p>Started from $10</p>
          <h2>Printed memory foam brief modern throw pillow case</h2>
          <button>EXPLORE NOW</button>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={pillow2Img} alt="" />
            </div>
            <div className="image-stack bottom"></div>
          </div>
        </div>
      </div>

      <div className="pillow-third-div">
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={pillow3Img} alt="" />
            </div>
            <div className="image-stack bottom"></div>
          </div>
        </div>
        <div className="pillow3-details">
          <p>Started from $10</p>
          <h2>Printed memory foam brief modern throw pillow case</h2>
          <button>EXPLORE NOW</button>
        </div>
      </div>

    </div>
  );
};

export default Pillow;
