import React from 'react';
import Header from '../components/header/Header';

const AdmissionsPage = () => {
  return (
    <div>
      <Header /> {/* Header added here */}
      
      <div className="page-admissions">
        <h2>Admissions</h2>
        <p>Join our community by applying through our simple admission process.</p>
      </div>
    </div>
  );
};

export default AdmissionsPage;
