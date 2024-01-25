import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgnfkqw",
        "template_75w11f6",
        form.current,
        "-UDGnhZXQBeprIFi7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
