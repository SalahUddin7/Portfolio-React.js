import React from 'react';
import { DataForAllTech } from '../data/DataForAllTech';
import IndividualTechItem from './IndividualTechItem';

export default function TechSectionArea() {
  const Technologies = DataForAllTech.map((item) => (
    <IndividualTechItem key={item.id} item={item} />
  ));
  return (
    <div className="technology-container" id="technology">
      <h2>Technology I use</h2>

      <div className="tech-content">
        <p>Here is a list of techonology I am using and can work comfortably</p>

        <ul>{Technologies}</ul>
      </div>
    </div>
  );
}
