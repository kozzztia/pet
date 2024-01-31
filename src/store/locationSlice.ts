import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameResident, LocationStateData, Resident} from '../types/residentType';
import { blendedResidents } from '../utils/gameUtils';

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
    clearSelectResidentsInStore: state => {
      return {
        ...state,
        selectResidents: [],
      };
    },
    setNewCardGame: state => {
      return {
        ...state,
        gameResidents: blendedResidents(state.residents),
        selectResidents: [],
      };
    },
    changeIsOpenInResidents: (state, action: PayloadAction<string[]>) => {
      const [id1, id2] = action.payload;
      return {
        ...state,
        gameResidents: state.gameResidents.map(item =>
          item.id === id1 || item.id === id2 ? {...item, isOpen: false} : item,
        ),
      };
    },
  },
});

export const {
  setNewCardGame,
  setLocationDataToStore,
  setSelectResidentsToStore,
  clearSelectResidentsInStore,
  changeIsOpenInResidents,
} = locationSlice.actions;
export default locationSlice.reducer;
