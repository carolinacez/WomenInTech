import React from "react";
import codegirl from "../assets/codegirl.JPG";

function Aboutus() {
  return (
    <div className='margin'>
      <div className="uk-card uk-card-default">
        <div className="uk-card-body">
          <h1 className="text-color">About girl_code</h1>
          <p className='p-text'>
            We are a mission based company. We sell different type of
            merchandise which 50% of the proceeds got to supporting women of all
            ages who want to get into tech. As a minority in this industry we
            feel like it's important to support and inspire women to get into
            tech. Please checkout our merch in the products section and sign up
            or login to checkout more resources on how women can get started in
            the tech industry or other ways on how to support women in tech.
          </p>
        </div>
        <div class="uk-card-media-bottom">
          <img className='center-image' src={codegirl} alt="" uk-cover></img>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
