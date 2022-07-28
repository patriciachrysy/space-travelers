import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar';
import RounterComponents from './components/RouterComponent';
import store from './Redux/ConfigureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <RounterComponents />
    </Router>
  </Provider>
);

export default App;
