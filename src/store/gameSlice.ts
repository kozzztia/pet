import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameResident} from '../types/residentType';

interface GameState {
  game: GameResident[] | [];
}

const initialState: GameState = {
  game: [],
};

const gameSlice = createSlice({
  name: 'gameResidents',
  initialState,
  reducers: {
    setResidents: (state, action: PayloadAction<GameResident[] | []>) => {
      state.game = action.payload;
    },
  },
});

export const {setResidents} = gameSlice.actions;
export default gameSlice.reducer;
