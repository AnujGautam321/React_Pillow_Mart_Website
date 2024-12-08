import React from "react";
import "./TrendingStyles.css";
import pillow1 from "./pillow1.png";
import pillow2 from "./pillow2.png";
import pillow3 from "./pillow3.png";
import pillow4 from "./pillow4.png";
import pillow5 from "./pillow5.png";
import pillow6 from "./pillow6.png";

const Trending = () => {
  return (
    <div className="trending-main-div">
      <h3>Trending Items</h3>

      <div className="pillow-container">

        <div className="pillow1">
          <img src={pillow1} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>
        <div className="pillow2">
          <img src={pillow2} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>
        <div className="pillow3">
          <img src={pillow3} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>
        <div className="pillow4">
          <img src={pillow4} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>
        <div className="pillow5">
          <img src={pillow5} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>
        <div className="pillow6">
          <img src={pillow6} alt="" />
          <p>Cervical pillow for airplane car office nap pillow</p>
          <span>From $5</span>
        </div>

      </div>

    </div>
  );
};

export default Trending;
