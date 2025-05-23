import React from 'react';
import './Sidebar.css'; 
import { FiHome, FiUsers, FiCalendar, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-icons">
        <h3 className="logo">FIK</h3>
        <FiHome className="icon" />
        <FiUsers className="icon" />
        <FiCalendar className="icon" />
      </div>

      <div className="bottom-icons">
        <FiSettings className="icon" />
        <FiHelpCircle className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
