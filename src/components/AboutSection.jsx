import React from "react";
import Profile from "../assets/salahuddin-profile-image-png.png";

export default function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="grid-container">
        {/* Unnecesary tag, you could use the h1 to align itself -1 */}
        <div className="item1">
          <h1>About Me</h1>
        </div>

        {/* You dont need to group the paragrapghs inside 2 divs:flex-container and about-paragraph -1 */}
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

          {/* Unnecesary tag, you could use the img to align itself -1 */}
          <div className="profile-picture">
            <img src={Profile} alt=" an immage of myself" />
          </div>
        </div>
      </div>
    </div>
  );
}
