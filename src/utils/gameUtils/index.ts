import {Dimensions} from 'react-native';
import {SIZES} from '../../styles';
import {GameResident, Resident} from '../../types/residentType';

const getSize = (length: number): number => {
  if (length < 4) {
    return 1;
  }
  if (length >= 4 && length < 9) {
    return 2;
  }
  if (length >= 9 && length < 16) {
    return 3;
  }
  if (length >= 16 && length < 25) {
    return 4;
  }
  if (length >= 25 && length < 36) {
    return 5;
  }
  if (length >= 36) {
    return 6;
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
  while (array.length < count * 2) {
    const randomNumber: number = Math.floor(Math.random() * count * 2);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};

const createGameResidents = (residents: Resident[]): GameResident[] => {
  const residentsCopy: GameResident[] = [];
  const residentsNew: GameResident[] = [];
  const position = getBlendedId(residents.length);
  for (let i = 0; i < residents.length; i++) {
    if (residents[i]) {
      residentsCopy.push({
        id: +residents[i].id + +residents.length,
        name: residents[i].name,
        image: residents[i].image,
        isOpen: false,
      });
      residentsNew.push({
        id: +residents[i].id,
        name: residents[i].name,
        image: residents[i].image,
        isOpen: false,
      });
    }
  }
  const gameResidentsWithoutSort = [...residentsNew, ...residentsCopy];
  const size = getSize(gameResidentsWithoutSort.length);
  const gameResidents = [];
  for (let i = 0; i < size * size; i++) {
    gameResidents.push(gameResidentsWithoutSort[position[i]]);
  }

  return gameResidents;
};

export {getBlendedId, getCardSize, createGameResidents};
