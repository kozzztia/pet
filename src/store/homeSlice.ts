import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {locationType} from '../types/locationsTypes';

export interface HomeState {
  locations: locationType[];
  nextPage: string | null;
}

const initialState: HomeState = {
  locations: [],
  nextPage: null,
};

const homeSlice = createSlice({
  name: 'homeValue',
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

export const {setLocationsAndNextPageToRedux} = homeSlice.actions;
export default homeSlice.reducer;
