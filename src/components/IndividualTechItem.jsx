import React from 'react';

export default function IndividualTechItem({ item }) {
  return (
    <div className="item-wrapper">
      <li>
        <img src={item.logo} alt={item.name} />
        <label>{item.name}</label>
      </li>
    </div>
  );
}
