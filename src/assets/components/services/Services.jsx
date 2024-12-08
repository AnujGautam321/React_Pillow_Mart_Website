import React from "react";
import "./ServicesStyles.css";
import creditCard from "./credit-card.png";
import onlineOrder from "./online-order.png";
import freeDelivery from "./free-delivery.png";
import productWithGift from "./product-with-gift.png";
const Services = () => {
  return (
    <div className="services-main-div">
      <div className="grid1">
        <h4>
          Credibly innovate granular internal or organic sources whereas
          standards.
        </h4>
      </div>
      <div className="grid2">
        <p>
          Seamlessly empower fully researched growth strategies and
          interoperable internal or “organic” sources. Credibly innovate
          granular internal or “organic” sources whereas high standards in
          web-readiness.
        </p>
      </div>
      <div className="grid3">
        <img src={creditCard} alt="" />
        <p>Credit Card Support</p>
      </div>
      <div className="grid4">
        <img src={onlineOrder} alt="" />
        <p>Online Order</p>
      </div>
      <div className="grid5">
        <img src={freeDelivery} alt="" />
        <p>Free Delivery</p>
      </div>
      <div className="grid6">
        <img src={productWithGift} alt="" />
        <p>Product with gift</p>
      </div>
    </div>
  );
};

export default Services;
