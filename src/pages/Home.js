import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactMe from "./ContactMe";

export default function Home() {
  const [welcomeText, setWelcomeText] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const welcomeMessage = "  Adil Ata SAHIN";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setWelcomeText((prevText) => {
        if (currentIndex < welcomeMessage.length) {
          return prevText + welcomeMessage[currentIndex];
        } else {
          clearInterval(intervalId);
          setShowDescription(true);
          return prevText;
        }
      });
      currentIndex++;
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="container">
      <h1 className="welcome-text">{welcomeText}</h1>

      <section className="description-section">
        <p>
          I am passionate about both front-end development, specializing in
          JavaScript (TypeScript, React.js), and backend development using
          ASP.NET.
          <br />
        </p>
      </section>
      <section className="description-section-two">
        <p>
          {" "}
          I am dedicated to continuous self-improvement, embracing new
          challenges daily
          <br /> and never hesitating to seek out opportunities for learning and
          growth
        </p>
      </section>

      <ProjectsSection />
    </div>
  );
}
