import React from "react";

import LinkedIn from "../assets/footer-icons/linkedin-svg.svg";
import GitHub from "../assets/footer-icons/github-svg.svg";

export default function Footer() {
  const yearNow = new Date().getFullYear();

  // Same as the ContactSection, it can be refactored
  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/salahsweden/"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SalahUddin7"
          >
            <img src={GitHub} alt="" />
          </a>
        </li>
      </ul>
      <p> Designed and Created by Salah Uddin | © {yearNow}</p>
    </footer>
  );
}
