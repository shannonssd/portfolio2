import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, projects} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!projects.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="projects">
      <div className="title">
        <Fade top duration={2000}>
          My Projects
        </Fade>
      </div>
        {/* <div className="skills-secondary-div">
      <div className="first">asd</div>
      <div className="second">asd</div>

        </div> */}
      <div className="skills-main-div">
        <div className="skills-secondary-div">
          <Fade left duration={2000}>
            <div className={isDark ? "skills-image-div-dark" : "skills-image-div-light"}>
                <img
                  alt="keep"
                  src="project-6-latest.png"
                ></img>
            </div>
          </Fade>
          <Fade right duration={2000}>
              <div className="skills-text-div">
                <div className="title-icon">
                    <h1
                      className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                    >
                      KEEP
                    </h1>

                  <div className="icons">
                    <a
                      href="https://github.com/shannonssd/KEEP-capstone-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i  className={isDark ? "fab fa-github gitHub-dark" : "fab fa-github gitHub-light"  }></i>
                    </a>
                     <a
                      href="https://www.keepapp.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-window-maximize"></i>
                    </a>
                  </div>
                </div>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                KEEP is a healthcare app made for families who are collectively taking care of their sick family members. <br/>
                It takes away the administrative hassle of coordinating medical visits, keeps track of medication refills and allows for easy sharing of patient's medical details with family members.
              </p>
              <div className="tech">
                <p className="tech-stack">MongoDB</p>
                <p className="tech-stack">AWS S3</p>
                <p className="tech-stack">Socket.io</p>
                <p className="tech-stack">Express.js</p>
                <p className="tech-stack">Node.js</p>
                <p className="tech-stack">Telegram API</p>
                <p className="tech-stack">CRON</p>
                <p className="tech-stack">React</p>
                <p className="tech-stack">Material UI</p>
              </div>
            </div>
            
          </Fade>
        </div>


        <div className="skills-secondary-div">
          <Fade left duration={2000}>
            <div className="skills-text-div-phone">
             <div className="title-icon">
                  <div className="icons">
                    <a
                      href="https://github.com/shannonssd/project-5-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i  className={isDark ? "fab fa-github gitHub-dark" : "fab fa-github gitHub-light"  }></i>

                    </a>
                     <a
                      href="https://neighbourlyapp.live/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-window-maximize"></i>
                    </a>
                  </div>

                  <h1
                className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                >
                Neighbourly
              </h1>
            </div>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle-phone skills-text-subtitle"
                    : "subTitle-phone skills-text-subtitle"
                }
              >
                NEIGHBOURLY is a community app that builds a greater sense of belonging amongst neighbours.<br/>
                Users can give away pre-loved items to neighbours, discover and develop shared interests and chat with one another. <br/>
              </p>
              <div className="tech-phone">
                <p className="tech-stack">MongoDB</p>
                <p className="tech-stack">AWS S3</p>
                <p className="tech-stack">Socket.io</p>
                <p className="tech-stack">Express.js</p>
                <p className="tech-stack">Node.js</p>
                <p className="tech-stack">React</p>
                <p className="tech-stack">Material UI</p>
              </div>
           
            </div>
          </Fade>
          <Fade right duration={2000}>
          <div className="phone-container">
            <div className="skills-image-div-phone">
                <img
                  alt="Man Working"
                  src="project-5-latest.png"
                ></img>
            </div>
          </div>
          </Fade>
        </div>


        <div className="skills-secondary-div">
          <Fade left duration={2000}>
            <div className={isDark ? "skills-image-div-dark" : "skills-image-div-light"}>
                <img
                  alt="Man Working"
                  src="project-4-latest.png"
                ></img>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className="skills-text-div">
              <div className="title-icon">
                
                <h1
                  className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                >
                  OmNomNicient
                </h1>
             
                     <div className="icons">
                    <a
                      href="https://github.com/shannonssd/OmNomNicient-Project4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i  className={isDark ? "fab fa-github gitHub-dark" : "fab fa-github gitHub-light"  }></i>

                    </a>
                 
                  </div>
                   </div>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                OmNomNicient is designed to help users identify dishes based on photos and recommend restaurants selling that dish. <br/>
                It allows users who are unfamiliar with dish names to easily identify dishes and find places around them selling the dish.
              </p>
              <div className="tech">
                <p className="tech-stack">PostgreSQL</p>
                <p className="tech-stack">Google Places API</p>
                <p className="tech-stack">Google Geocoding API</p>
                <p className="tech-stack">Express.js</p>
                <p className="tech-stack">Node.js</p>
                <p className="tech-stack">TensorFlow</p>
                <p className="tech-stack">React</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
