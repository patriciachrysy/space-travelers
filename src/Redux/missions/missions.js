const RETRIEVE_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS';
const BOOK_MISSION = 'space-travlers/missions/BOOK_MISSION';
const LEAVE_MISSION = 'space-travlers/missions/LEAVE_MISSION';

export const retrieveMissions = () => ({ type: RETRIEVE_MISSIONS });
export const bookMission = (payload) => ({ type: BOOK_MISSION, payload });
export const leaveMission = (payload) => ({ type: LEAVE_MISSION, payload });

const missions = (state, action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.payload;
    case BOOK_MISSION:
      return state.map((mission) => (
        mission.id === action.payload ? { ...mission, reserved: true } : mission
      ));
    case LEAVE_MISSION:
      return state.map((mission) => (
        mission.id === action.payload ? { ...mission, reserved: false } : mission
      ));
    default:
      return state;
  }
};

export default missions;
