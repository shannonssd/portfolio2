import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.scss';
import StyleContext from "../../contexts/StyleContext";


export default function ContactUs() {
  const {isDark} = useContext(StyleContext);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jsx8893', 'template_zo7cl6r', form.current, 'W_1u65-cOxu2vvdyr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

   return (
    <form ref={form} onSubmit={sendEmail} className={isDark ? "form-dark" : "form-light"}>
          <textarea type="text" id="fname" name="from_name" 
          className = "input-name"
          placeholder="Name" />
          <textarea type="text" id="lname" name="email" className = "input-email" placeholder="Email" />
          <textarea id="subject" name="message" 
          className="message"
          placeholder="Message" ></textarea>
        <input type="submit" className='submit' value="Send" />
    </form>
  );
}