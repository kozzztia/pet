import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {locationType} from '../types/locationsTypes';

export interface LocationsState {
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
    setLocationsAndNextPageToRedux: (
      state,
      action: PayloadAction<{
        locations: locationType[];
        nextPage: string | null;
      }>,
    ) => {
      state.locations.push(...action.payload.locations);
      state.nextPage = action.payload.nextPage;
    },
  },
});

export const {setLocationsAndNextPageToRedux} = locationsSlice.actions;
export default locationsSlice.reducer;
