import React from 'react';
import { DataForAllTech } from '../data/DataForAllTech';
import IndividualTechItem from './IndividualTechItem';

export default function TechSectionArea() {
  const Technologies = DataForAllTech.map((item) => (
    <IndividualTechItem key={item.id} item={item} />
  ));
  return (
    <div className="technology-container" id="technology">
      <h1 className="tech-item-one">Technology</h1>

      <p className="tech-item-two">
        Here is a list of techonology I am using and can work comfortably.
      </p>

      <ul className="tech-item-three">{Technologies}</ul>
    </div>
  );
}
