import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import portfoyImage from "../assets/projectImages/Portfoy.png";
import Portfolio2 from "../assets/projectImages/Portfolio2.png";
import portfoy4 from "../assets/projectImages/portfoy4.png";
import portfoy5 from "../assets/projectImages/portfoy5.png";
import portfoy6 from "../assets/projectImages/portfoy6.png";
import portfolio7 from "../assets/projectImages/portfolio7.png";
import portfolio8 from "../assets/projectImages/portfolio8.png";
import portfolio9 from "../assets/projectImages/portfolio9.png";
import portfolio10 from "../assets/projectImages/portfolio10.png";
import portfolio11 from "../assets/projectImages/portfolio11.png";
import portfolio12 from "../assets/projectImages/portfolio12.png";
import portfolio13 from "../assets/projectImages/portfolio13.png";
const projects = [
  {
    id: 1,
    title: "E-Commerce Car Cover Website",
    imageUrl: portfoyImage,
    link: "https://premium-carcover.com/",
  },
  {
    id: 2,
    title: "Home Decoration E-Commerce Website",
    imageUrl: Portfolio2,
    link: "https://pahstudio.co/tr",
  },
  {
    id: 3,
    title: "ASP.NET MVC Music Library Web App",
    imageUrl: portfoy4,
    link: "https://github.com/AtaSahin/MusicLibrary",
  },
  {
    id: 4,
    title: "E-Commerce Fashion Website",
    imageUrl: portfoy5,
    link: "https://tuvanam.com/en",
  },
  {
    id: 5,
    title: "Pomodoro Web App",
    imageUrl: portfoy6,
    link: "https://github.com/AtaSahin/Pomodoro-Web-App",
  },
  {
    id: 6,
    title: "Weather Forecast Web App",
    imageUrl: portfolio7,
    link: "https://github.com/AtaSahin/Weather-Web-App",
  },
  {
    id: 7,
    title: "Starbuck Clone Mobile App",
    imageUrl: portfolio8,
    link: "https://github.com/AtaSahin/Starbucks-Mobile-App",
  },
  {
    id: 8,
    title: "Netflix Clone Mobile App",
    imageUrl: portfolio9,
    link: "https://github.com/AtaSahin/Netflix-Mobile-App",
  },
  {
    id: 9,
    title: "Whatsapp-Web-App",
    imageUrl: portfolio10,
    link: "https://github.com/AtaSahin/Whatsapp-Web-App",
  },
  {
    id: 10,
    title: "Portfolio Template Web Site",
    imageUrl: portfolio11,
    link: "https://github.com/AtaSahin/functionalWebSite",
  },
  {
    id: 11,
    title: "Industrial Machine E-Commerce Web Site",
    imageUrl: portfolio12,
    link: "https://eosmachine.com/",
  },
  {
    id: 11,
    title: "Personal Web Site",
    imageUrl: portfolio13,
    link: "/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
