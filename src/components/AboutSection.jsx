import React from 'react';
import Profile from '../assets/salahuddin-profile-image-png.png';

export default function AboutSection() {
  return (
    <div className="section">
      <div className="about-grid">
        <div>
          <h1>About Me</h1>
        </div>

        <div className="about about-flex">
          <div>
            I am a Front end developer based in Stockholm, Sweden. Welcome to my
            website, here you can find projects that I have developed. I like to
            do modern web development and always curious about latest tech.
            Scroll down to see some of my work!
          </div>
          <div className="profile-picture">
            <img src={Profile} alt=" an immage of myself" />
          </div>
        </div>
      </div>
    </div>
  );
}
