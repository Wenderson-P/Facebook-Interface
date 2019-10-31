import React from 'react';
import facebookLogo from '../../assets/facebook.svg';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <img src={facebookLogo} alt="Facebook logo" />
    </div>
  );
}
