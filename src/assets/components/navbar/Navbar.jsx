import React, { useState } from "react";
import "./NavbarStyles.css";
import logoPillowmart from "./logo_pillowmart.png";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo_pillowmart dark" : "logo_pillowmart"}>
        <img src={logoPillowmart} alt="" />
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        {/* <li id="menu-products">
          <a href="#">Products</a>
           <ul id="dropdown-products">
            <li>
              <a href="#">Product List</a>
            </li>
            <li>
              <a href="#">Product Details</a>
            </li>
          </ul> 
  </li> */}
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="nav-icons">
        <FaCartShopping className="icon" style={{ marginRight: "1rem" }} />
      </div>

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>About</li>
          <li>Product</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
