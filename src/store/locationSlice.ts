import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameResident, LocationStateData, Resident} from '../types/residentType';

export const initialState: LocationStateData = {
  gameResidents: [],
  residents: [],
  name: '',
  selectResidents: [],
};

interface setLocationDataToStoreType {
  gameResidents: GameResident[];
  residents: Resident[];
  name: string;
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationDataToStore: (
      state,
      action: PayloadAction<setLocationDataToStoreType>,
    ) => {
      return {
        ...state,
        gameResidents: action.payload.gameResidents,
        name: action.payload.name,
        residents: action.payload.residents,
      };
    },
    setSelectResidentsToStore: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        selectResidents:
          state.selectResidents.length < 2
            ? [...state.selectResidents, action.payload]
            : [action.payload],
      };
    },
  },
});

export const {setLocationDataToStore, setSelectResidentsToStore} =
  locationSlice.actions;
export default locationSlice.reducer;
