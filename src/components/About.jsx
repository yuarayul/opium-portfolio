import React from 'react';
import '../App.css'; // Make sure App.css contains the footer and shared styles

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hey there! I'm <strong> Ayul</strong>, a passionate Graphic designer ,Video editor and Software Developer (MERN)
          dedicated to transforming ideas into bold, eye-catching visuals.
        </p>
        <p className="about-text">
          With a keen eye for design and a deep love for storytelling through motion, I craft work that speaks volumes.
          Whether it’s a sleek logo, a vibrant poster, or a powerful video edit, I bring creativity and detail to everything I touch.
        </p>
        <p className="about-text">
          Based in Kenya, I work with artists, creators, and businesses to elevate their brand and visual identity.
          Let's create something 🔥.
        </p>
      </div>
    </section>
  );
};

export default About;

