import axios from 'axios';
import {LocationsState} from '../../store/locationsSlice';

export const GetLocations = async (point: string): Promise<LocationsState> => {
  try {
    const res = await axios.get(point);
    const locations = res.data.results;
    const nextPage = res.data.info.next;
    return {locations, nextPage};
  } catch (error) {
    throw error;
  }
};
