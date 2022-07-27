import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveMissions } from '../Redux/missions/missions';
import Table from 'react-bootstrap/Table';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(retrieveMissions());
    }
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th className="hide">Hello</th>
        </tr>
      </thead>
      <tbody>
        {
          missions.map((mission) => <Mission key={mission.mission_id} mission={mission} />)
          }
      </tbody>
    </Table>
  );
};

export default Missions;
