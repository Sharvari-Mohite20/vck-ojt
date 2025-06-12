// pages/CoursesPage.jsx
import React from 'react';
import './Contact.css';
import Header from '../components/header/Header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container about-background">
        <div className="scroll-box">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-description">
                We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
          </p>

          <div className="course-list">
            <div className="course-item">
              <h2>General Enquiries</h2>
              <h3>Vivekanand College Main Campus</h3>
              <p>
                [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India<br></br>
                Phone: **+91 12345 67890**<br></br>
                Email: **info@vivekanandcollege.edu**<br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br></br>
              </p>
              <h2>Admissions Office</h2>
              <p>
                For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                Phone: +91 98765 43210<br></br>
                Email: admissions@vivekanandcollege.edu<br></br>
              </p>
              <h2>Student Support Services</h2>
              <p>
                For current student support, academic advising, or general assistance:<br></br>
                Phone: +91 87654 32109<br></br>
                Email: studentsupport@vivekanandcollege.edu<br></br>               
              </p>
              <h2>Find Us on the Map</h2>
              <p>
                [You can embed a Google Map here later using an iframe or a React map library.]<br></br>
                View on Google Maps<br></br>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
