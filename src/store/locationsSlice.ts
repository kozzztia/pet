import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {infoType, locationType} from '../types/locationsTypes';

interface LocationsState {
  locations: locationType[];
  info: infoType;
}

const initialState: LocationsState = {
  locations: [],
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: null,
  },
};

const locationsSlice = createSlice({
  name: 'locationsValue',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<locationType[]>) => {
      return {
        ...state,
        locations: action.payload,
      };
    },
    setInfo: (state, action: PayloadAction<infoType>) => {
      return {
        ...state,
        info: action.payload,
      };
    },
  },
});

export const {setLocations} = locationsSlice.actions;
export default locationsSlice.reducer;
