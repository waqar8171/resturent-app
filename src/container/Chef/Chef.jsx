import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we blieve in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit, nam accusantium facere vitae blanditiis repudiandae cupiditate! Vitae.</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quasi exercitationem quaerat sapiente ullam eum esse assumenda, tempora dolorum, suscipit, quisquam et iste.lorem23Lorem ipsum dolor sit amet consectetur adipisicing elit, nam accusantium facere vitae blanditiis </p>
      </div> 
      <div className="app__chef-sign"><p>Kevin Lui</p>
      <p className="p__opensans">Chef & Fouder</p>
      <img src={images.sign} alt="sign " />
      </div>
    </div>
  </div>
);

export default Chef;
