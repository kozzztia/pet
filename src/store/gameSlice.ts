import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameResident} from '../types/residentType';

interface GameState {
  gameResidents: GameResident[] | undefined;
  locationName: string | undefined;
}

const initialState: GameState = {
  gameResidents: undefined,
  locationName: undefined,
};

const gameSlice = createSlice({
  name: 'gameResidents',
  initialState,
  reducers: {
    setGameData: (
      state,
      action: PayloadAction<{
        residents: GameResident[] | undefined;
        locationName: string | undefined;
      }>,
    ) => {
      state.gameResidents = action.payload.residents;
      state.locationName = action.payload.locationName;
    },
  },
});

export const {setGameData} = gameSlice.actions;
export default gameSlice.reducer;
