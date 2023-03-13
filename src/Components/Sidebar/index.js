import React from 'react';
import { Link} from 'react-router-dom';
import './index.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='list-type'>
        <li className='names'>
          <Link to="/drivers">Drivers</Link>
        </li>
        <li className='names'>
          <Link to="/summary">Summary</Link>
        </li>
        <li className='names'>
          <Link to="/trip-creation">Trip Creation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
