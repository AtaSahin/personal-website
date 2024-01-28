import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactMe = ({ darkMode }) => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    setSuccessMessage(true);
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

  if (successMessage) {
    return (
      <p style={{ color: darkMode ? "white" : "black" }}>
        Thank you for your message. I will get back to you as soon as
        possible...
      </p>
    );
  }

  return (
    <div className={`contact-form-container ${darkMode ? "dark" : "light"}`}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label style={{ color: darkMode ? "white" : "black" }}>Name</label>
        <input type="text" name="user_name" />
        <label style={{ color: darkMode ? "white" : "black" }}>Email</label>
        <input type="email" name="user_email" />
        <label style={{ color: darkMode ? "white" : "black" }}>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(ContactMe);
