// pages/CoursesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';   // ✅ add this import
import './Courses.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const CoursesPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container about-background">

        <div className="scroll-box">
          <h1 className="page-title">Our Academic Program</h1>
          <h2 className='page-title2'>Courses Offered</h2>
          <p className="page-description">
            Vivekanand College offers a diverse range of undergraduate and postgraduate courses designed to empower students with knowledge and practical skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
          </p>

          <h1 className="page-description">
            Discover College Campus Life
          </h1>

          <video width="100%" height="auto" controls>
            <source src="https://vck.codewonders.in/assets/college-tour-FAmcnyfF.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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

            <div>
              <h2>Specialized and Vocational Courses</h2>
              <br />
              <hr />
              <p>
                In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
              </p>
            </div>

            {/* ✅ Section where you wanted the button */}
            <div>
              <p className='last'>
                Have questions about a specific course?
              </p>
              <br></br>
              <Link to="/ContactPage">
                <button className='apply-button'>Inquire About Us</button>
              </Link>
            </div>
            

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
