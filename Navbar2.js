import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <div className="navbar2">
    <div className="left-items2">
      <span className="username2">SIGN UP FOR DAILY INSIDER</span>
    </div>
    <div className="center-items2">
      <input type="text" placeholder="Enter your email" className="search-bar2" />
    </div>
    <div className="right-items2">
      <span className="nav-item2">SUBSCRIBE</span>
      {/* <span className="nav-item">Login</span> */}
    </div>
  </div>
  );
};

export default Navbar2;
