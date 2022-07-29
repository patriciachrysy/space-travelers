import { createAsyncThunk } from '@reduxjs/toolkit';
import RocketsService from '../../service/RocketsService';

const RETRIEVE_ASYNC_ROCKETS = 'space-travlers/rockets/RETRIEVE_ROCKETS';
const RETRIEVE_ROCKETS = 'space-travlers/rockets/RETRIEVE_ROCKETS/fulfilled';
const BOOK_ROCKET = 'space-travlers/rockets/BOOK_ROCKET';
const LEAVE_ROCKET = 'space-travlers/rockets/LEAVE_ROCKET';

const initialState = [];

export const retrieveRockets = createAsyncThunk(
  RETRIEVE_ASYNC_ROCKETS,
  async () => {
    const result = await RocketsService.getRockets();
    const { data } = result;
    const payload = data.map((res) => ({
      id: res.id,
      name: res.rocket_name,
      description: res.description,
      image: res.flickr_images,
    }));
    return payload;
  },
);
export const bookRocket = (payload) => ({ type: BOOK_ROCKET, payload });
export const leaveRocket = (payload) => ({ type: LEAVE_ROCKET, payload });

const rockets = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
      ));
    case LEAVE_ROCKET:
      return state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
      ));
    default:
      return state;
  }
};

export default rockets;
