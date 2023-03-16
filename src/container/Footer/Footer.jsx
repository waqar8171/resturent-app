import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 w 53rd st, New york,Nt-y 1009,Usa</p>
          <p className="p__opensans">+03216457568</p>
          <p className="p__opensans">+9233163179003</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">83 I have a function that needs to </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday to Frlday</p>
          <p className="p__opensans">08:00am 10:00pm</p>
          <p className="p__opensans">Monday to Frlday</p>
          <p className="p__opensans">11:00pm 12:00am</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          100% backwards-compatible. Hooks dont contain any breaking changes.
        </p>
      </div>
    </div>
  );
};
export default Footer;
