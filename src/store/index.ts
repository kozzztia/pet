import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import gameReducer from './gameSlice';
import {rickAndMortyApi} from './useGetDataQuery';

const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
