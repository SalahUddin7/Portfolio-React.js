import React from 'react';

export default function Card({ project, onClick }) {
  const { image, title, completed } = project;
  console.log(onClick);

  return (
    <div onClick={onClick}>
      <li>
        <div className={`active ${completed ? 'inactive' : ''}`}>
          COMING SOON
        </div>
        <img src={image} alt="" />
        <h6>Name: {title}</h6>
      </li>
    </div>
  );
}
