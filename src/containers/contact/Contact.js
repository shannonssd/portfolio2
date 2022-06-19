import React, {useContext} from "react";
import "./Contact.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ContactUs from "./contactForm";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">Contact Me</h1>
            <div
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              I'm currently searching for new opportunities in the software engineering field. 
              <br/>If you have a job opportunity, or would just like to chat, you can drop me a message below and I'll get back to you as soon as possible!
            </div>
          </div>
          <div className="contact-box">
          <ContactUs/>

          </div>
          
        </div>
      </div>
    </Fade>
  );
}
