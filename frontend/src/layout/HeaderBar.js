import React from 'react';
import './HeaderBar.css';
import {
  FiUser,
  FiBriefcase,
  FiCalendar,
  FiList,
  FiActivity,
  FiFileText,
  FiSettings,
} from 'react-icons/fi';

const HeaderBar = () => {
  return (
    <div className="header-bar">
      {/* Top row: back button, title, page nav, share/kanban */}
      <div className="header-top">
        <div className="header-left-nav">
            <button className="circle-btn">←</button>
            <h2>Research and Development Officer</h2>
            <div className="page-nav">
                <span>1 of 8</span>
                <button className="circle-btn">⋯</button>
            </div>
        </div>

        <div className="header-actions">
          <button className="share-btn">Share & Promote</button>
        </div>
      </div>

      {/* Meta row: status and info */}
      <div className="job-meta">
        <span className="status-badge">Open</span>
        <span className="info">
          Researcher • Onsite • Created by <b>Demini Waidyanatha</b>
        </span>
      </div>

      {/* Tabs navigation */}
      <div className="header-tabs">
        <div className="tab active"><FiUser /> Candidates</div>
        <div className="tab"><FiBriefcase /> Job Info</div>
        <div className="tab"><FiCalendar /> Calendar</div>
        <div className="tab"><FiList /> Score Card</div>
        <div className="tab"><FiActivity /> Activity</div>
        <div className="tab"><FiFileText /> Application Form</div>
        <div className="tab">
          <FiSettings /> Automation
          <span className="badge">5</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
