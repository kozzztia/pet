import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LocationStateData} from '../types/residentType';

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
    changeIsOpenInGameResidentById: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        gameResidents: state.gameResidents.map(item =>
          item.id === action.payload ? {...item, isOpen: !item.isOpen} : item,
        ),
      };
    },
  },
});

export const {setLocationDataToStore, changeIsOpenInGameResidentById} =
  locationSlice.actions;
export default locationSlice.reducer;
