import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="container-section">
      <div className="contact-container">
        <h1>Contact Me</h1>

        <p>
          Here is my contact information.I look forward to collaborate with a
          great oganization.
        </p>

        <div className="flex-container item2">
          <div>
            <FaRegEnvelope />
            <a href="mailto:ziko.salahuddin@gmail.com">
              ziko.salahuddin@gmail.com
            </a>
          </div>
          <div>
            <FaPhoneAlt />
            <a href="mailto:zzziko@gmail.com">0736422997</a>
          </div>

          <div>
            <FaMapMarker />
            <a href="https://goo.gl/maps/rHGJmtoi5sttNc5p8">
              Stockholm, Sweden
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
