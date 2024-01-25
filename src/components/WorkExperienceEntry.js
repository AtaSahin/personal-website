import React from "react";

const WorkExperienceEntry = ({
  title,
  company,
  city,
  country,
  link,
  dateRange,
  description,
  technologies,
  isRightAligned,
}) => {
  const entryStyle = {
    textAlign: isRightAligned ? "right" : "left",
    paddingRight: isRightAligned ? "0" : "20px",
    paddingLeft: isRightAligned ? "20px" : "0",
  };

  const lineStyle = {
    borderLeft: isRightAligned ? "2px solid #333" : "none",
    borderRight: isRightAligned ? "none" : "2px solid #333",
    height: "100%",
    position: "absolute",
    top: "0",
    left: isRightAligned ? "calc(100% - 2px)" : "0",
  };

  return (
    <div className="work-experience-entry" style={entryStyle}>
      <h3>{title}</h3>
      <p>
        {company} - {city}, {country}
      </p>
      <p>Date Range: {dateRange}</p>
      <p>
        <strong>Link:</strong>{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>
      <p>{description}</p>
      <p>
        <strong>Technologies Used:</strong> {technologies}
      </p>
      <div style={lineStyle}></div>
    </div>
  );
};

export default WorkExperienceEntry;
