import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets,
    missions,
  },
});

export default store;
