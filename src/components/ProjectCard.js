import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={project.link}
      className="project-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-content">
        <img src={project.imageUrl} alt={project.title} />
        <h3>{project.title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
