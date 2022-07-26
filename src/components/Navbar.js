import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const NavBar = () => (
  <header>
    <figure>
      <img src="../assets/planet.png" alt="Logo" />
    </figure>
    <nav>
      <NavLink
        to="/rockets"
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
      >
        Profile
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
