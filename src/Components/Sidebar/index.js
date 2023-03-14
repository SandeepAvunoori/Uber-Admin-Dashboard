import React from 'react';
import './index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/drivers">Drivers</a>
        </li>
        <li>
          <a href="/summary">Summary</a>
        </li>
        <li>
          <a href="/trip-creation">Trip Creation</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
