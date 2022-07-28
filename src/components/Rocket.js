import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { bookRocket, leaveRocket } from '../Redux/rockets/rockets';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;

  const joinRocket = () => dispatch(bookRocket(rocket.id));

  const cancelRocket = () => dispatch(leaveRocket(rocket.id));

  return (
    <div className="single-rocket">
      <img src={rocket.image} alt={rocket.name} className="rocket-image" />

      <div>
        <h3>{rocket.name}</h3>
        <p>
          {rocket.reserved && (
            <Badge bg="primary small-margin">Reserved</Badge>
          )}
          {rocket.description}
        </p>
        {!rocket.reserved && (
        <Button variant="outline-secondary" onClick={() => joinRocket()}>Reserve Rocket</Button>
        )}
        {rocket.reserved && (
        <Button variant="outline-danger" onClick={() => cancelRocket()}>Cancel Reservation</Button>
        )}
      </div>

    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
