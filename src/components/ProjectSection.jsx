import React from 'react';
import Project1 from '../assets/beach.jfif';

export default function ProjectSection() {
  return (
    <div className="project-section">
      <div className="project-container">
        <div className="item-one">
          <h1>Project Section</h1>
        </div>
        <div className="item-two">
          Here is my contact information.I look forward to collaboratation.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime
          nesciunt soluta fugit illo necessitatibus.
        </div>
        <div className="item-three">
          <div> This is Item 1 </div>
          <div>
            <img src={Project1} alt="Example of my Project" />
            <h2>Restaurent Meal</h2>
            <p>Lorem ipsum, dolor sit dipis.</p>
          </div>

          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>
    </div>
  );
}
