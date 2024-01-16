import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BublesData, GameStateData, LocationData} from '../types/residentType';

export const initialState: GameStateData = {
  residents: [],
  bubles: [],
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
    setBublesDataToStore: (state, action: PayloadAction<BublesData>) => {
      state.bubles = action.payload.bubles;
    },
  },
});

export const {setLocationDataToStore, setBublesDataToStore} = gameSlice.actions;
export default gameSlice.reducer;
