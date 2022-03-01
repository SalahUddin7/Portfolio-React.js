import React from 'react';

export default function Card({ project, onClick }) {
  const { image, title, completed } = project;
  console.log(onClick);

  return (
    <div onClick={onClick} className="project-card">
      <li>
        <div className={`active ${completed ? 'inactive' : ''}`}>
          <p className="coming-soon">COMING SOON</p>

          {/* Position Abosulte
          Z index- 1000 */}
          {/* Reduce Opacity 0.3 */}
          {/*  */}
        </div>
        <img src={image} alt="" />
        <h6> {title}</h6>
      </li>
    </div>
  );
}
