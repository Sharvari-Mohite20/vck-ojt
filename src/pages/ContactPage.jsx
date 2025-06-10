import React from 'react';
import Header from '../components/header/Header';

const ContactPage = () => {
  return (
    <div>
      <Header /> {/* Add header here */}

      <div className="page contact">
        <h2>Contact Us</h2>
        <p>Email: info@vckcollege.edu | Phone: +91 12345 67890</p>
      </div>
    </div>
  );
};

export default ContactPage;
