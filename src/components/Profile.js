import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../assets/styles/Profile.css';

const Profile = () => {
  const reservedMissions = useSelector((state) => (
    state.missions.filter((mission) => mission.reserved)
  ));

  const reservedRockets = useSelector((state) => (
    state.rockets.filter((rocket) => rocket.reserved)
  ));

  return (
    <div className="profile-content">
      <section className="reserved-missions">
        <h1>My Missions</h1>
        <Table bordered>
          <tbody>
            {
                reservedMissions.map((mission) => (
                  <tr key={mission.id}>
                    <td>{mission.name}</td>
                  </tr>
                ))
              }
          </tbody>
        </Table>
      </section>

      <section className="reserved-rockets">
        <h1>My Rockets</h1>
        <Table bordered>
          <tbody>
            {
              reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))
          }
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Profile;
