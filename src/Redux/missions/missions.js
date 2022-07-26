import { createAsyncThunk } from '@reduxjs/toolkit';
import MissionsService from '../../service/MissionsService';

const RETRIEVE_ASYNC_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS';
const RETRIEVE_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS/fulfilled';
const BOOK_MISSION = 'space-travlers/missions/BOOK_MISSION';
const LEAVE_MISSION = 'space-travlers/missions/LEAVE_MISSION';

const initialState = [];

export const retrieveMissions = createAsyncThunk(
  RETRIEVE_ASYNC_MISSIONS,
  async () => {
    const result = await MissionsService.getMissions();
    const { data } = result;
    const payload = data.map((res) => ({
      id: res.mission_id,
      name: res.mission_name,
      description: res.description,
    }));
    return payload;
  },
);
export const bookMission = (payload) => ({ type: BOOK_MISSION, payload });
export const leaveMission = (payload) => ({ type: LEAVE_MISSION, payload });

const missions = (state = initialState, action) => {
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
