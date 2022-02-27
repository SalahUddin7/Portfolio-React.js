import React from 'react';

export default function Card(project, onClick) {
  return (
    <div>
      <li>
        <div className={`active ${project.completed ? 'inactive' : ''}`}>
          COMING SOONn
        </div>
        <img onClick={onClick} src={project.image} alt="" />
        <h3>{project.title}</h3>
      </li>
    </div>
  );
}
