import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './Missions';
import Profile from './Profile';
import Rockets from './Rockets';

const RounterComponents = () => (
  <Routes>
    <Route path="/rockets" element={<Rockets />} />
    <Route path="/missions" element={<Missions />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);

export default RounterComponents;
