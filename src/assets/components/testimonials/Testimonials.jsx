import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TestimonialsStyles.css";
import { Carousel } from "react-responsive-carousel";
import person1 from "./person1.png";
import person2 from "./person2.png";
import person3 from "./person3.png";

const Testimonials = () => {
  return (
    // <div className='testimonials-main-div'>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={200000}
    >
      <div>
        <img src={person1} />
        <div className="myCarousel">
          <p>
            “Working in Conjunction with humanitarian aid agencies, we have
            Supported programmes to help alleviated human suffers.""
          </p>
          <h3>-Micky Mouse</h3>
        </div>
      </div>

      <div>
        <img src={person2} />
        <div className="myCarousel">
          <p>
            “Working in Conjunction with humanitarian aid agencies, we have
            Supported programmes to help alleviated human suffers.""
          </p>
          <h3>-Micky Mouse</h3>
        </div>
      </div>

      <div>
        <img src={person3} />
        <div className="myCarousel">
          <p>
            “Working in Conjunction with humanitarian aid agencies, we have
            Supported programmes to help alleviated human suffers.""
          </p>
          <h3>-Micky Mouse</h3>
        </div>
      </div>
    </Carousel>
    //  </div>
  );
};

export default Testimonials;
