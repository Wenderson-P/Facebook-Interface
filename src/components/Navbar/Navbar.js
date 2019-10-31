import React from 'react';
import facebookLogo from '../../assets/facebook.svg';
import userImage from '../../assets/user.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <img src={facebookLogo} alt="Facebook logo" />
      <h5>Meu perfil</h5>
      <img src={userImage} alt="User logo" />
    </div>
  );
}
