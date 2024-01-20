import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  setLocationResidentsToStore,
  setLocationNameToStore,
  setGameResidentsToStore,
} from './locationSlice';
import {useGetResidentsQuery} from './useGetDataQuery';
import {blendedResidents} from '../utils/gameUtils/utils';

export const fetchLocationData = createAsyncThunk(
  'location/fetchLocationData',
  async (game: number, {dispatch}) => {
    try {
      const {data} = await useGetResidentsQuery(game as number);
      if (data) {
        dispatch(setLocationResidentsToStore(data?.location.residents));
        dispatch(setLocationNameToStore(data?.location.name));
        dispatch(
          setGameResidentsToStore(blendedResidents(data?.location.residents)),
        );
      }
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  },
);
