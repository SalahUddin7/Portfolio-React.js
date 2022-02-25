import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="container-section">
      <div className="contact-container a">
        <div className="item11">
          <h1>Contact Me-7</h1>
        </div>

        <div className="b">
          <div>
            <p>
              1 Here is my contact information.I look forward to collaborate
              with a great oganization.
            </p>
          </div>

          <div className="">
            2
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
  );
}
