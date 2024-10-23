import React, { useState } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/Display.svg';

const Navbar = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <Logo className="navbar-logo" />
        <span>Display</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          
          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={sorting}
              onChange={(e) => onSortingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;