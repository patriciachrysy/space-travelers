import http from '../http-common';

const getMissions = () => http.get('/missions');

const MissionsService = { getMissions };

export default MissionsService;
