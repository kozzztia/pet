import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameResident, LocationStateData, Resident} from '../types/residentType';

export const initialState: LocationStateData = {
  gameResidents: [],
  residents: [],
  name: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationDataToStore: (
      state,
      action: PayloadAction<LocationStateData>,
    ) => {
      state.gameResidents = action.payload.gameResidents;
      state.name = action.payload.name;
      state.residents = action.payload.residents;
    },
    setLocationResidentsToStore: (state, action: PayloadAction<Resident[]>) => {
      return {
        ...state,
        residents: action.payload,
      };
    },
    setLocationNameToStore: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setGameResidentsToStore: (state, action: PayloadAction<GameResident[]>) => {
      return {
        ...state,
        gameResidents: action.payload,
      };
    },
  },
});

export const {
  setLocationDataToStore,
  setLocationResidentsToStore,
  setLocationNameToStore,
  setGameResidentsToStore,
} = locationSlice.actions;
export default locationSlice.reducer;
