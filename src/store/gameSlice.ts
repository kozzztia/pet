import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocationData} from '../types/residentType';

const initialState: LocationData = {
  residents: [],
  name: '',
};

const gameSlice = createSlice({
  name: 'gameResidents',
  initialState,
  reducers: {
    setLocationDataToStore: (state, action: PayloadAction<LocationData>) => {
      state.residents = action.payload.residents;
      state.name = action.payload.name;
    },
  },
});

export const {setLocationDataToStore} = gameSlice.actions;
export default gameSlice.reducer;
