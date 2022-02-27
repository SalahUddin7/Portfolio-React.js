import React from 'react';

export default function TechItem({ item }) {
  return (
    <div>
      <li>
        <img src={item.logo} alt={item.name} />
        <label>{item.name}</label>
      </li>
    </div>
  );
}
