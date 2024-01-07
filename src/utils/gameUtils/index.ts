import {Dimensions} from 'react-native';
import {SIZES} from '../../styles';
import {GameResidents, Resident} from '../../types/residentType';

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

const getCardSize = (length: number): number => {
  const cardSize = Dimensions.get('window').width;

  if (length <= 10) {
    return cardSize / 2 - SIZES.mainMargin;
  }
  if (length <= 30) {
    return cardSize / 3 - SIZES.mainMargin;
  }
  if (length <= 60) {
    return cardSize / 4 - SIZES.mainMargin;
  }
  if (length > 60) {
    return cardSize / 5 - SIZES.mainMargin;
  }
  if (length > 90) {
    return cardSize / 6 - SIZES.mainMargin;
  }
  return 0;
};

const createGameResidents = (residents: Resident[]): GameResidents[] => {
  const residentsCopy: GameResidents[] = [];
  const residentsNew: GameResidents[] = [];
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
  const gameResidents = [];
  for (let i = 0; i < gameResidentsWithoutSort.length; i++) {
    gameResidents.push(gameResidentsWithoutSort[position[i]]);
  }

  return gameResidents;
};

export {getBlendedId, getCardSize, createGameResidents};
