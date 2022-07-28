import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Logo from '../assets/planet.png';

const NavBar = () => (
  <header>
    <div>
      <img src={Logo} alt="Logo" />
      <h1>Space Travelers&lsquo; Hub</h1>
    </div>
    <nav>
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? 'active-link' : 'none')}
      >
        Rockets
      </NavLink>

      <NavLink
        to="/missions"
        className={(navData) => (navData.isActive ? 'active-link' : 'none')}
      >
        Missions
      </NavLink>

      <NavLink
        to="/profile"
        className={(navData) => (navData.isActive ? 'active-link' : 'none')}
      >
        Profile
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
