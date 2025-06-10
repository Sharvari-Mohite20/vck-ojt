import React from 'react';
import './Courses.css';
import Header from '../components/header/Header';

const CoursesPage = () => {
  return (
    <div>
      <Header /> {/* Header added here */}

      <div className="page courses">
        <div className="main-div">
          <h2>Our Academic Program</h2>
          <p>
            Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs
            designed to equip students with the knowledge and skills demanded by today's dynamic global
            landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
