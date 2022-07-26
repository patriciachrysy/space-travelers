import http from '../http-common';

const getMissions = () => http.get('/missions');

const missionsService = { getMissions };

export default missionsService;