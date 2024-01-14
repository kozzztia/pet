import {GameData, GameResident, Resident} from '../../types/residentType';
import {useGetResidentsQuery} from '../../store/useGetDataQuery';
import {useDispatch} from 'react-redux';
import {setGameDataToStore} from '../../store/gameSlice';

const getSize = (length: number | undefined): number =>
  !length || length < 8 ? 1 : length < 18 ? 8 : length < 32 ? 16 : 32;

const getRandomArray = (length: number): number[] => {
  const array: number[] = [];
  while (array.length < length) {
    const randomNumber: number = Math.floor(Math.random() * length);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};

const blended = (
  data: Resident[] | GameResident[],
): (Resident | GameResident)[] => {
  const limit = getSize(data.length as number);
  const blendedData: (Resident | GameResident)[] = getRandomArray(limit).map(
    item => data[item],
  );
  return blendedData;
};

const createGameResidents = (data: Resident[]): GameResident[] => {
  if (!data || data.length === undefined) {
    return [];
  }
  const blendedResidents = blended(data) as Resident[];

  return blendedResidents.flatMap(item => [
    {
      id: `${item.id}-original`,
      name: `${item.name}`,
      image: `${item.image}`,
      isOpen: false,
    },
    {
      id: `${item.id}-copy`,
      name: `${item.name}`,
      image: `${item.image}`,
      isOpen: false,
    },
  ]);
};


const SetGameData = async (game: number) => {
  const {data} = useGetResidentsQuery(game as number);
  const dispatch = useDispatch();
  if (data?.location.residents) {
    const newResidents = createGameResidents(data.location.residents);
    const newGameResidents = blended(newResidents) as GameResident[];

    const value = {
      residents: newGameResidents,
      locationName: data?.location.name,
    };
    dispatch(setGameDataToStore(value));
  }
};

export {SetGameData};
