import React from "react";

export default function Card({ project, onClick }) {
  const { image, title, completed } = project;
  console.log(onClick); // no debug comments in production -1

  return (
    <div onClick={onClick} className="project-card">
      <li>
        <div className={`active ${completed ? "inactive" : ""}`}>
          <p className="coming-soon">COMING SOON</p>
        </div>
        <img src={image} alt="" />
        {/* Don't use H6 to make a text smaller, you use CSS for that purpose -1 */}
        {/* H6 means that is a subtitle of a subtitle of a subtitle */}
        <h6> {title}</h6>
      </li>
    </div>
  );
}
