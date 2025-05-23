import React from 'react';
import './FilterBar.css';
import { FiSearch, FiFilter, FiUserPlus, FiGrid } from 'react-icons/fi';

const FilterBar = ({ showForm }) => {
  return (
    <div className="filter-bar">
      <div className="search-box">
        <FiSearch />
        <input type="text" placeholder="Search" />
      </div>

      <div className="filters">
        <select>
          <option>Date Range</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>

        <select>
          <option>Score Range</option>
          <option>1 - 2</option>
          <option>3 - 5</option>
        </select>

        <button className="filter-btn">
          <FiFilter />
          Advance Filter
        </button>

        <button className="filter-btn">
          <FiUserPlus />
          Refer People
        </button>

        <button className="filter-btn">
          <FiGrid />
          Kanban
        </button>

        {showForm && (
          <span style={{ fontSize: '13px', marginLeft: '12px', color: '#1e40af' }}>
            📄 Fill the form below to add a candidate
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
