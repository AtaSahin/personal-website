import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactMe from "./ContactMe";
import { connect } from "react-redux";
import { toggleTheme } from "../redux/theme";

const Home = ({ darkMode, toggleTheme }) => {
  const [welcomeText, setWelcomeText] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    /*
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "ksl0ocek87");
    */

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
  }, []); // Empty dependency array ensures the effect runs only once.

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
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
};
const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps)(Home);
