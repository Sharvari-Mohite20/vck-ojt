import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Header />

      <div className="home-container">
        <div className="scroll-box">

          {/* Welcome Banner Section */}
          <div className="header-image-container">
            <img
              src="/images/header_top (1).jpg"
              alt="Welcome Banner"
              className="header-img"
            />
            <div className="header-overlay">
              <h1>Welcome to Vivekanand College!</h1>
              <Link to="/AdmissionsPage" ><button className='apply-button'>Apply Now!</button></Link>
            </div>
          </div>

          {/* About Section */}
          <h1 className="page-title">Welcome Vivekanand College</h1>
          <p>
            <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic
            excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of
            students, empowering them to achieve their full potential.
          </p>
          <p >
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our
            state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem
            where curiosity thrives and future leaders are shaped.
          </p>

          {/* Why Choose Us */}
          <h2 className="page-title2">Why Choose Vivekanand College?</h2>
          <ul>
            <li>Legacy of Excellence: Decades of commitment to quality education.</li>
            <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
            <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
            <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
            <li>Strong Placements: Excellent career opportunities with leading companies.</li>
          </ul>

          {/* Our Values */}
          <h2 className="page-title2">Our Values</h2>
          <ul>
            <li>Excellence in Education</li>
            <li>Integrity and Accountability</li>
            <li>Respect for Diversity</li>
            <li>Community Engagement</li>
          </ul>

          {/* Campus Section */}
          <h2 className="page-title2">Campus Life & Facilities</h2>
          <img
            src="https://vck.codewonders.in/assets/students-studying-DbLGuwF_.jpeg"
            alt="Campus Life"
            className="campus-img"
          />
        <br></br>
          <img
            src="https://media.collegedekho.com/media/img/institute/crawled_images/VC_Banner_2.jpg?width=640"
            alt="Campus Life"
            className="campus-img"
          />
          
          <p className="caption">
            Explore our vibrant, green, and modern campus Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth..
          </p>
          
          <p className='caption2'>
            Ready to explore our Courses?
          </p>
          <br></br>
          <Link to="/CoursesPage" ><button className='apply-button'>Explore Courses!</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
