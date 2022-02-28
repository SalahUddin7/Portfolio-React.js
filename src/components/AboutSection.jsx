import React from 'react';
import Profile from '../assets/salahuddin-profile-image-png.png';

export default function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="grid-container">
        <div className="item1">
          <h1>About Me</h1>
        </div>

        <div className="flex-container item2">
          <div className="about-paragraph">
            <p>
              I am a Front end developer based in Stockholm, Sweden. Welcome to
              my website, here you can find projects that I have developed. I
              like to do modern web development and always curious about latest
              tech.
            </p>

            <p>Scroll down to see some of my work!</p>
          </div>

          <div className="profile-picture">
            <img src={Profile} alt=" an immage of myself" />
          </div>
        </div>
      </div>
    </div>
  );
}
