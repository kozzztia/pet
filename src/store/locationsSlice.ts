import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {locationType} from '../types/locationsTypes';

interface LocationsState {
  locations: locationType[];
  nextPage: string | null;
}

const initialState: LocationsState = {
  locations: [],
  nextPage: null,
};

const locationsSlice = createSlice({
  name: 'locationsValue',
  initialState,
  reducers: {
    setLocationsToRedux: (state, action: PayloadAction<locationType[]>) => {
      return {
        ...state,
        locations: [...state.locations, ...action.payload],
      };
    },
    setNextPageToRedux: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        nextPage: action.payload,
      };
    },
  },
});

export const {setLocationsToRedux, setNextPageToRedux} = locationsSlice.actions;
export default locationsSlice.reducer;
