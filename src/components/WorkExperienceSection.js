import React from "react";
import WorkExperienceEntry from "./WorkExperienceEntry";

const WorkExperienceSection = () => {
  return (
    <section className="work-experience-section">
      <h2>Work Experience</h2>
      <WorkExperienceEntry
        title="Software Engineer Intern"
        company="KocSistem"
        city="Ankara"
        country="Türkiye"
        link="https://github.com/AtaSahin/MusicLibrary"
        dateRange="02/2014 – 05/2014"
        description="I specialized in ASP.NET Core, C#, and key technologies during my internship."
        technologies=".NET Core 7, C#, HTML/CSS, Bootstrap, JavaScript, RateLimit, AutoMapper, Localization, NLog, RabbitMQ"
      />
      <WorkExperienceEntry
        title="Mobile Developer (React Native)"
        company="Lets Parky"
        city="Ankara"
        country="Türkiye"
        dateRange="11/2022 – 06/2023"
        description="Developed and maintained cross-platform mobile applications using React Native, utilizing TypeScript and JavaScript for coding."
        technologies="React Native, TypeScript, JavaScript, Redux"
        isRightAligned
      />
      <WorkExperienceEntry
        title="Web Developer"
        company="Freelancer"
        dateRange="07/2021 – Current"
        description="Proficiently utilized Shopify and WordPress platforms for website development with custom coding in JavaScript, HTML, and CSS to create tailored and professional websites."
        technologies="JavaScript, HTML, CSS, Shopify, WordPress"
      />
    </section>
  );
};

export default WorkExperienceSection;
