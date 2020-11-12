import React from "react";
import codegirl from "../assets/codegirl.JPG";
import Auth from "../utils/auth";
import aboutgirl from "../assets/aboutus.JPG"

function Aboutus() {
  
  function homepage() {
    if(Auth.loggedIn()) {
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
                Please checkout the links below for web development resources 
                and other organizations that support women/girls in tech: 
              
                <p className="resources">Getting started in web development resources:</p>
                <ul>
            <li>
              <a href="https://www.shecodes.io/">SheCodes</a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
            </li>
            <li>
              <a href="https://www.codecademy.com/">codecademy</a>
            </li>
            <li>
              <a href="https://www.hiretechladies.com/">TechLadies</a>
            </li>
          </ul>
          <p className="resources">Other organizations supporting women/girls in tech:</p>
          <ul>
            <li>
              <a href="https://girlswhocode.com/">Girls Who Code</a>
            </li>
            <li>  
              <a href="https://www.blackgirlscode.com/">Black Girls Code</a>
            </li>
            <li>
              <a href="https://codingblackfemales.com/">Coding Black Females</a>
            </li>
            <li>
              <a href="https://www.womenwhocode.com/">Women Who Code</a>
            </li>
            </ul>
          </p>
        </div>
            <div class="uk-card-media-bottom">
            <img src={aboutgirl} alt="" uk-cover></img>
            </div>
      </div>
    </div>
      )
    } else {
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
                Please checkout the links below for web development resources 
                and other organizations that support women/girls in tech: 
                </p>
              </div>
              <div class="uk-card-media-bottom">
                <img className='center-image' src={codegirl} alt="" uk-cover></img>
              </div>
            </div>
          </div>
        )
    }
  }
  
  return (
    <div> {homepage()}
    </div>
  );
}

export default Aboutus;
