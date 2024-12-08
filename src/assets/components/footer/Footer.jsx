import React from 'react'
import './FooterStyles.css'
import logoImg from './logo_pillowmart.png'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='footer-main-div'>
        <div className='logo-pillowmart'>
            <img src={logoImg} alt="" />
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
        <CiFacebook />
        <CiInstagram />
        <FaGooglePlusG />
        <TiSocialLinkedinCircular />
        </div>
    </div>
  )
}

export default Footer