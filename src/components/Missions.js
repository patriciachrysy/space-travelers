import React, { useEffect } from 'react';
import { useDispatch, useState } from 'react-redux';
import { retrieveMissions } from '../Redux/missions/missions';

const Missions = () => {
  const missions = useState((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(retrieveMissions());
    }
  }, []);

  return <div>THis is Mission section</div>;
};

export default Missions;
