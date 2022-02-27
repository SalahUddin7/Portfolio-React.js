import React from 'react';

export default function IndividualTechItem({ item }) {
  return (
    <div className="tech-item-box">
      <li>
        <img src={item.logo} alt={item.name} />
        <label>{item.name}</label>
      </li>
    </div>
  );
}
