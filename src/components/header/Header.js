import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  projects,
  openSource,
  achievementSection
} from "../../portfolio";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewAboutMe = greeting.displayGreeting;
  const viewExperience = openSource.display;
  const viewProjects = projects.display;
  const viewContact = achievementSection.display;

  return (
      <Headroom>
        <header className={isDark ? "dark-menu header" : "header"}>
          <a href="/" className="logo">
            <span  className={isDark ? "dark logo-name no-border": "light logo-name no-border"}>Shannon Suresh</span>
          </a>
          {/* <input className={isDark ? "dark-hover menu-btn" : "light-hover menu-btn"} type="checkbox" id="menu-btn" /> */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{color: "white"}}
          >
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {viewAboutMe && (
              <Fade top duration={550}> 
              <li>
                <a href="#about-me">About Me</a>
              </li>
              </Fade>
            )}
            {viewProjects && (
              <Fade top duration={650}> 
              <li>
                <a href="#projects">Projects</a>
              </li>
              </Fade>
            )}
            {viewExperience && (
              <Fade top duration={750}> 
              <li>
                
                <a href="#experience">Experience</a>
              </li>
              </Fade>
            )}
            {viewContact && (
              <Fade top duration={850}> 
              <li>
                <a href="#contact">Contact</a>
              </li>
              </Fade>
            )}
              <Fade top duration={950}> 
            <li>
              <Button
                text="Resume"
                href='https://drive.google.com/file/d/1wYys2H9btI_KIMZ7b3IXsMfMDt3Aka6X/view?usp=sharing'
                newTab
              />

            </li>
            </Fade>
            <li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>
                <ToggleSwitch/>
              </a>
            </li>
          </ul>
        </header>
      </Headroom>

  );
}
export default Header;
