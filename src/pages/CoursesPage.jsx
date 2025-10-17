// pages/CoursesPage.jsx
import React from 'react';
import './Courses.css'; // or create a separate CSS if needed
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



const CoursesPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container about-background">

        <div className="scroll-box">
          <h1 className="page-title">Courses Offered</h1>
          <p className="page-description">
            Vivekanand College offers a diverse range of undergraduate and postgraduate courses designed to empower students with knowledge and practical skills.
          </p>

          <div className="course-list">
            <div className="course-item">
              <h2>Bachelor of Science (B.Sc)</h2>
              <p>Specializations in Physics, Chemistry, Mathematics, Botany, Zoology, and Computer Science.</p>
            </div>

            <div className="course-item">
              <h2>Bachelor of Arts (B.A)</h2>
              <p>Includes subjects like History, Political Science, Economics, Sociology, and English Literature.</p>
            </div>

            <div className="course-item">
              <h2>Bachelor of Commerce (B.Com)</h2>
              <p>Focus on Accounting, Business Studies, Economics, and Finance.</p>
            </div>

            <div className="course-item">
              <h2>Master of Science (M.Sc)</h2>
              <p>Postgraduate programs in Chemistry, Physics, and Computer Science.</p>
            </div>

            <div className="course-item">
              <h2>Vocational & Certificate Courses</h2>
              <p>Short-term and skill-based training in IT, Management, and Communication.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CoursesPage;
