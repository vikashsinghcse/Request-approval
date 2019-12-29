import React from 'react';
import './Header.css';
import logo from './Airbase_Logo_RGB-02.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} height="24px" width="96px" alt="airbase logo"></img>
    </header>
  );
}

export default Header;
