import React from 'react';

export default function Card({ project, onClick }) {
  const { image, title, completed } = project;

  return (
    <div>
      <li>
        <div className={`active ${completed ? 'inactive' : ''}`}>
          COMING SOONn
        </div>
        <img onClick={onClick} src={image} alt="" />
        <h3>{title}</h3>
      </li>
    </div>
  );
}
