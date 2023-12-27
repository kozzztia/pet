import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    locations: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
