import React, {useContext} from "react";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    

      <div className={isDark ? "dark-mode greet-main": "greet-main" }id="about-me" >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="about-me-container">
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
               <Fade bottom duration={1000} distance="40px">    
                Hi! 
               </Fade>
               <Fade bottom duration={1000} delay={1000} distance="40px">    
                I'm Shannon
               </Fade>
              </h1>
                <Fade bottom duration={1000} delay={2000} distance="40px">   
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
              </p>
              <SocialMedia />
              </Fade>
              {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div> */}
            </div>
          </div>
          <Fade bottom duration={1000} delay={2000} distance="40px">   
          <div className="greeting-image-div">
            <img
            className={isDark ? 'image-dark' : 'image-light'}
              alt="man sitting on table"
              src="shan_pic.jpg"
            ></img>
          </div>
          </ Fade>
        </div>
      </div>
  );
}
