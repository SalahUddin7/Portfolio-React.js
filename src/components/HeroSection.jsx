import React from 'react';
import Hero from '../assets/hero-section-image-by-nick-fewings-nbwmNehHvis-unsplash1.jpg';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <img
        src={Hero}
        alt=" an immage of computer captured by nick-fewings used in hero-section"
      />
      <section className="hero-details">
        <h1> Salah Uddin </h1>
        <h6> Frontend developer</h6>
        <p>Welcome to my world </p>
      </section>
    </div>
  );
}
