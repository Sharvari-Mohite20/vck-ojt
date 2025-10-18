// pages/CoursesPage.jsx
import React from 'react';
import './Contact.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


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
              <p className='message'>
                [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India<br></br>
                Phone: +91 12345 67890**<br></br>
                Email: info@vivekanandcollege.edu<br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br></br>
              </p>
              <br></br>
              <h2>Admissions Office</h2>
              <p className='message'>
                For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                Phone: +91 98765 43210<br></br>
                Email: admissions@vivekanandcollege.edu<br></br>
              </p>
              <br></br>
              <h2>Student Support Services</h2>
              <p className='message'>
                For current student support, academic advising, or general assistance:<br></br>
                Phone: +91 87654 32109<br></br>
                Email: studentsupport@vivekanandcollege.edu<br></br>               
              </p>
              <br></br>
              <h2>Find Us on the Map</h2>
              <p className='message'>
                <a href='https://maps.app.goo.gl/rCcUB1pyabLyhLgy6?g_st=aw'>https://maps.app.goo.gl/rCcUB1pyabLyhLgy6?g_st=aw</a>
                <br></br>
                View on Google Maps<br></br>
              </p>
              <br></br>
              <h2>
                Send Us a Message
              </h2>
              <p className='message'>
                [A contact form with fields for Name, Email, Subject, Message can be added here.]
              </p>
            </div>

            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
