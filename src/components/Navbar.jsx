import React from 'react';
import logo from '/Vector.png';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <img src={logo} alt="logo" className="nav-logo" />
    </nav>
  );
}
