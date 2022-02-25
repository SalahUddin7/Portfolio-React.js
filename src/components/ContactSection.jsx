import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="container-section">
      <div className="contact-container">
        <div class="contact-grid-container">
          <div class="item1">
            <h1>Contact Me</h1>
          </div>
          <div class="item2">
            <p>
              Here is my contact information.I look forward to collaboratation.
            </p>
          </div>
          <div class="item3">
            {' '}
            <div className="">
              <div>
                <FaRegEnvelope />
                <a href="mailto:ziko.salahuddin@gmail.com">
                  ziko.salahuddin@gmail.com
                </a>
              </div>
              <div>
                <FaPhoneAlt />
                <a href="mailto:zzziko@gmail.com">0046 (0)73 642 2997</a>
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
      </div>
    </div>
  );
}
