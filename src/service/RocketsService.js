import http from '../http-common';

const getRockets = () => http.get('/rockets');

const RocketsService = { getRockets };

export default RocketsService;
