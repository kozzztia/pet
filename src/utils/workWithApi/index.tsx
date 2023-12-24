import axios from 'axios';
import {locationType} from '../../types/locationsTypes';

export const GetLocations = async (point: string): Promise<locationType[]> => {
  try {
    const res = await axios.get(point);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
