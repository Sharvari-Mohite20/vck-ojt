import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";  


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Left side: Vivekanand College */}
        <div className="logo-text">Vivekanand College</div>

        {/* Right side: nav links and button */}
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/AboutPage" className="nav-link">About</Link>
          <Link to="/CoursesPage" className="nav-link">Courses</Link>
          <Link to="/ContactPage" className="nav-link">Contact</Link>
          <Link to="/AdmissionsPage"><button className='apply-button-2'>Apply Now!</button></Link>
        </nav>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
