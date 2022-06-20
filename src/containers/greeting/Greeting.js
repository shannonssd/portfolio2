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
                <div className="intro">
                   Hello there! Welcome to my portfolio website! Ever since I was a young kid I’ve loved solving problems and creating things. What started out as an interest in Usborne puzzle books and Tamiya cars has developed today into an interest in creating things on the internet. 
                </div>
                <div className="intro">
                   My interest in programming was brought to the forefront in my last job when I was tasked with collaborating with a company to build a new website. This motivated me to join a programming bootcamp where I could obtain more technical knowledge and have hands-on experience in building websites.
                </div>
                <div className="intro">
                  I have recently graduated from Rocket Academy’s Bootcamp and am looking for opportunities as a Software Engineer. Feel free to contact me if you have a job opportunity, or would just like to chat!
                </div>
                <div className="intro">
                Some technologies that I have worked with: 
                </div>
                <div className="tech-container">
                  <p className="tech-all">
                    SQL
                  </p>
                  <p className="tech-all">
                    React
                  </p> 
                  <p className="tech-all">
                    AWS S3
                  </p>
                  <p className="tech-all">
                    MongoDB
                  </p>
                  <p className="tech-all">
                    Node.js
                  </p>
                  <p className="tech-all">
                    Sequelize
                  </p>
                  <p className="tech-all">
                    Socket.io
                  </p>
                  <p className="tech-all">
                    Javascript
                  </p>
                  <p className="tech-all">
                    PostgreSQL
                  </p>
                  <p className="tech-all">
                     Express.js
                  </p>
                  
                 
                  <p className="tech-all">
                    Material UI
                  </p>
                </div>
              </p>
              <div className="social">
              <SocialMedia />
              </div>
              </Fade>
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
