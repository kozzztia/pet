import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {rickAndMortyApi} from './useGetLocationsQuery'; // Import your RTK-Query API

const store = configureStore({
  reducer: {
    user: userReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
