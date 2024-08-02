// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src='https://res.cloudinary.com/dgkru5vsg/image/upload/v1722606773/logo_s8zolh.webp' alt='logo'/></Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
      </div>
    </nav>
  );
};

export default Navbar;
