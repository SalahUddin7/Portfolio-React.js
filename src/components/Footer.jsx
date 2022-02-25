import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { VscGithubInverted } from 'react-icons/vsc';

export default function Footer() {
  return (
    <div className="footer-section">
      <div class="footer-container">
        <div class="footer-container-div">
          <p>Salah Uddin </p>
        </div>
        <div class="footer-container-div">
          <div class="footer-icon">
            <div>
              <VscGithubInverted />
              <a href="https://github.com/SalahUddin7"></a>
            </div>

            <div>
              <ImLinkedin />
              <a href="https://www.linkedin.com/in/salahsweden/"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
