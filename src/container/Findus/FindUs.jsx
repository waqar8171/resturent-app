import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-contact">
        <p className="p__opensans"> I tried to take that knowledge and! This is how you can write a condition:

</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >Opening Hours</p>
        <p className="p__opensans"> Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans"> Sat - Thus: 10:00 am - 02:00 am</p>
      </div>
      <button className="custom_button" style={{ marginTop: "2rem" }}>
        Visit US
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
