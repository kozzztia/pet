import axios from 'axios';
import {HomeState} from '../../store/homeSlice';

export const GetLocations = async (point: string): Promise<HomeState> => {
  try {
    const res = await axios.get(point);
    const locations = res.data.results;
    const nextPage = res.data.info.next;
    return {locations, nextPage};
  } catch (error) {
    throw error;
  }
};
