import React from 'react';
import Header from '../components/header/Header';
import './Admission.css';
import Footer from '../components/footer/Footer';

const AdmissionsPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container admissions-background">
        <div className="scroll-box admissions-box">
          <h1 className="page-title admissions-title">Admissions</h1>
          <p>
            At Vivekanand College, we welcome passionate learners from diverse backgrounds.
            Our admission process is designed to be smooth and transparent.
          </p>

          <h2 className="section-title">Admission Criteria</h2>
          <hr />
          <ul>
            <li>Completion of 10+2 or equivalent for undergraduate courses.</li>
            <li>Relevant bachelor's degree for postgraduate programs.</li>
            <li>Merit-based or entrance test-based selection depending on the program.</li>
          </ul>

          <h2 className="section-title">How to Apply</h2>
          <hr />
          <p>
            Candidates can apply online through our admissions portal or visit the campus to fill out the form.
          </p>
          <ul>
            <li>Visit the official website and go to the "Apply Now" section.</li>
            <li>Fill out the application form with accurate details.</li>
            <li>Upload the required documents.</li>
            <li>Submit and wait for confirmation via email/SMS.</li>
          </ul>

          <h2 className="section-title">Important Dates</h2>
          <hr />
          <ul>
            <li>Application Start Date: June 1, 2025</li>
            <li>Last Date to Apply: July 15, 2025</li>
            <li>Entrance Test (if applicable): July 25, 2025</li>
          </ul>

          <p>For more queries, visit the <strong>Contact</strong> page or reach out to our admissions team.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AdmissionsPage;
