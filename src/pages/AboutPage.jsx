import React from 'react';
import Header from '../components/header/Header'; // Correct path to Header
import Footer from '../components/footer/Footer'; // Correct path to Header

 // Optional: if you have About page-specific styles

const AboutPage = () => {
  return (
    <div>
      <Header /> 

      <div className="page-about">
        <h2>About Us</h2>
        <p>
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering
          transformative education. We aim to empower students through academic excellence and
          holistic development.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
