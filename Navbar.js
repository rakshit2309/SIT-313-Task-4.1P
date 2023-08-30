import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left-items">
      <span className="username">DEV@Deakin</span>
    </div>
    <div className="center-items">
      <input type="text" placeholder="Search..." className="search-bar" />
    </div>
    <div className="right-items">
      <span className="nav-item">Post</span>
      <span className="nav-item">Login</span>
    </div>
  </div>
  );
};

export default Navbar;
