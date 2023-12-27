// Header.js
import React from 'react';
import "./App.css";
import Dropdown from './Dropdown';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='my-logo'>
          <img src="./M.png" className="m-logo" alt="logo" />
        </div>
        <div className='dropDown'>
          <button onClick={Dropdown} className='dropbtn'>
            ☰
          </button>
          <div id='myDropdown' className='dropdown-content'>
            <Link to='/Body'>Home</Link>
            <Link to='/BodyAbout'>About</Link>
            <Link to='/BodyContact'>Contact</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;