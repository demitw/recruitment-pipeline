import React from 'react';
import { FiBell, FiSearch, FiPlus } from 'react-icons/fi';
import './TopNavbar.css';

const TopNavbar = ({ setShowAddForm }) => {
  return (
    <div className="top-navbar">
      {/* Left: Logo */}
      <div className="left-section">
        <span className="brand">tiimi <b>Recruitment</b></span>
      </div>

      {/* Center: Navigation */}
      <div className="center-links">
        <span className="link active">Jobs</span>
        <span className="link">Candidate</span>
        <span className="link">Career Site</span>
      </div>

      {/* Right: Add, Search, Bell, Profile */}
      <div className="right-icons">
        <button className="add-btn" onClick={() => setShowAddForm(true)}>
          <FiPlus />
        </button>
        <FiSearch className="icon" />
        <FiBell className="icon" />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default TopNavbar;
