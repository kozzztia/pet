import {Dimensions} from 'react-native';
import {SIZES} from '../../styles';
import {GameData, GameResident, Resident} from '../../types/residentType';
import {useGetResidentsQuery} from '../../store/useGetDataQuery';

const getSize = (length: number | undefined): number => {
  if (!length || length < 8) {
    return 0;
  }
  if (length >= 8 && length < 18) {
    return 8;
  }
  if (length >= 18 && length < 32) {
    return 16;
  }
  if (length >= 32) {
    return 32;
  }
  return 0;
};

const getCardSize = (length: number): number => {
  const cardSize = Dimensions.get('window').width;
  const size = getSize(length);
  return cardSize / size - SIZES.mainMargin;
};

const getBlendedId = (count: number): number[] => {
  let array: number[] = [];
  while (array.length < count) {
    const randomNumber: number = Math.floor(Math.random() * count);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};

const createGameResidents = (data: Resident[]): GameResident[] => {
  const gameResidents: GameResident[] = [];
  const copyResidents: GameResident[] = [];

  if (!data || data.length === undefined) {
    return [...gameResidents, ...copyResidents];
  }

  const arraySize = getSize(data.length as number);
  const rundomNumbers = getBlendedId(arraySize * 2);
  // ---create
  data?.forEach(item => {
    gameResidents.push({
      id: `${item.id}-original`,
      name: `${item.name}`,
      image: `${item.image}`,
      isOpen: false,
    });
    copyResidents.push({
      id: `${item.id}-copy`,
      name: `${item.name}`,
      image: `${item.image}`,
      isOpen: false,
    });
  });

  const newGameResidents = [...gameResidents, ...copyResidents];
  return newGameResidents;
};
const SetGameData = async (game: number) => {
  const {data} = useGetResidentsQuery(game as number);

  const newResidents = createGameResidents(data?.location.residents!);

  console.log(newResidents);
};

export {getBlendedId, getCardSize, SetGameData};
