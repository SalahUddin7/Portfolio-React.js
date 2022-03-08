import React from "react";
import Logo from "../assets/logo001.jpg";

export default function NavBar() {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about" className="main-logo">
              <img
                src={Logo}
                alt="Logo made by Salah Uddin to represent this Portfolio website"
              />
            </a>
          </li>
          <li>
            <a href="#technology">Tech</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
