import React from 'react';
import { DataForAllTech } from '../data/DataForAllTech';
import TechItem from './TechItem';

export default function TechSectionArea() {
  const Technologies = DataForAllTech.map((item) => (
    <TechItem key={item.id} item={item} />
  ));
  return (
    <div>
      <h2>Technology I use</h2>

      <div>
        <p>Here is a list of techonology I am using and can work comfortably</p>

        <ul>{Technologies}</ul>
      </div>
    </div>
  );
}
