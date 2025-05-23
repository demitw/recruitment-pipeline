import React from 'react';
import './Rightbar.css';
import { FiDownload, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar-content">
        <FiDownload className="icon" title="Export" />
        <FiSettings className="icon" title="Settings" />
        <FiHelpCircle className="icon" title="Help" />
      </div>
    </div>
  );
};

export default Rightbar;