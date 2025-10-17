import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <BrowserRouter>
      {/* Developer Info Popup */}
      <DeveloperInfoPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        studentName="Sharvari Satyajeet Mohite"
        studentPhotoUrl="/images/photo.jpeg"  // must be in /public/images/photo.jpeg
        uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />   {/* Homepage */}
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/AdmissionsPage" element={<AdmissionsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/CoursesPage" element={<CoursesPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>


      {/* Global Chatbot */}
      <ChatbotComponent />
    </BrowserRouter>
  );
};

export default App;
