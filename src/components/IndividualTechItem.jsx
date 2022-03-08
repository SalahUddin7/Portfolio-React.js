import React from "react";

export default function IndividualTechItem({ item }) {
  return (
    // unnecesary html tag, the li (list item) should be the parent tag -1
    <div className="tech-item-box">
      <li>
        <img src={item.logo} alt={item.name} />
        <label>{item.name}</label>
      </li>
    </div>
  );
}
