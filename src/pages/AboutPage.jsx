import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './About.css';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="about-container about-background">
        <div className="about-box">
          <h1 className="about-title">About Vivekanand College</h1>
          <p>
            Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative
            education since its inception in <strong>[Year of Establishment, e.g., 1980]</strong>. Located in the
            bustling heart of <strong>[City/Area, e.g., Chembur, Mumbai]</strong>, our college has consistently strived
            to uphold the highest standards of academic rigor and ethical values.
          </p>
          <p>
            Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense
            of social responsibility. We aim to nurture individuals who are not only successful in their careers but
            also contributing members of society.
          </p>

          

          <h2 className="about-title2">Our Mission</h2>
          <hr />
          <ul className="ul1">
            <li>To provide high-quality, accessible education across various disciplines.</li>
            <li>To foster research, innovation, and creativity among students and faculty.</li>
            <li>To cultivate a diverse and inclusive learning environment.</li>
            <li>To instill strong ethical values and leadership qualities.</li>
          </ul>

          <h2 className="about-title2">Our Values</h2>
          <hr />
          <ul>
            <li>Integrity and transparency in all endeavors.</li>
            <li>Commitment to academic and professional excellence.</li>
            <li>Respect for diversity and human dignity.</li>
            <li>Community engagement and social responsibility.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
