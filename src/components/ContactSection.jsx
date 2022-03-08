import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

// Although this component is not 50 lines long, could be refactor to remove a lot of duplication
export default function ContactSection() {
  return (
    <div className="container-section" id="contact">
      <div className="contact-container">
        <div className="contact-item1">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-item2">
          Here is my contact information.I look forward to collaboratation.
          Please feel free to call me or email me.
        </div>
        <div className="contact-item3">
          {/* This can be a component */}
          <div>
            <FaRegEnvelope />
            <a href="mailto:ziko.salahuddin@gmail.com">
              ziko.salahuddin@gmail.com
            </a>
          </div>
          {/* And this is another instance of the same component */}
          <div>
            <FaPhoneAlt />
            <a href="0046 (0)73 642 299">0046 (0)73 642 2997</a>
          </div>
          <div>
            <FaMapMarker />
            <a href="https://goo.gl/maps/rHGJmtoi5sttNc5p8">
              Stockholm, Sweden.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
