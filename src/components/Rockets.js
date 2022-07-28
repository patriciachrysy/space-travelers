import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveRockets } from '../Redux/rockets/rockets';
import Rocket from './Rocket';
import '../assets/styles/Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(retrieveRockets());
    }
  }, []);

  return (
    <div className="container">
      {
          rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
          }
    </div>
  );
};

export default Rockets;
