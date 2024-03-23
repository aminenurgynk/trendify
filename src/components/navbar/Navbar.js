import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Trendify</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;
