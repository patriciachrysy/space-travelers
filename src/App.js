import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import RounterComponents from './components/RouterComponent';

const App = () => (
  <Router>
    <NavBar />
    <RounterComponents />
  </Router>
);

export default App;
