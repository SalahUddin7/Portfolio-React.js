import React from 'react';
import Logo from '../assets/main-logo-salah.png';

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
            <a href="#hero">S</a>
          </li>
          <li>
            <a href="#hero" className="main-logo">
              <img
                src={Logo}
                alt="Logo made by Salah Uddin to represent this Portfolio website"
              />
            </a>
          </li>
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
