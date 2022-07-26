import MissionsService from "../../service/MissionsService";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

const RETRIEVE_ASYNC_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS';
const RETRIEVE_MISSIONS = 'space-travlers/missions/RETRIEVE_MISSIONS/fulfilled';
const BOOK_MISSION = 'space-travlers/missions/BOOK_MISSION';
const LEAVE_MISSION = 'space-travlers/missions/LEAVE_MISSION';

export const retrieveMissions = createAsyncThunk(
    RETRIEVE_ASYNC_MISSIONS,
    async () => {
        const { data } = MissionsService.getMissions();
        const payload = {
            id: data.mission_id,
            name: data.mission_name,
            description: data.description
        };
        return payload;
    }
)
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
