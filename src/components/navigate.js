// components/Navigation.js
import React from 'react';


function Navigation() {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="/menu">Menu</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
