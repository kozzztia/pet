import {GameResident, Resident} from '../../types/residentType';

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

const shuffleAndTake = <T>(array: T[], count: number): T[] => {
  const shuffledArray: T[] = [];
  const position = getRandomArray(array.length);
  for (let i = 0; i < count; i++) {
    shuffledArray.push(array[position[i]]);
  }
  return shuffledArray;
};

const blendedResidents = (residents: Resident[]): GameResident[] => {
  const blendedArray = shuffleAndTake(residents, Math.min(residents.length, 8));
  const result: GameResident[] = [];

  blendedArray.forEach(item => {
    result.push({
      name: item.name,
      image: item.image,
      id: `${item.id}`,
      isOpen: false,
    });
  });

  if (blendedArray.length >= 8) {
    const copyResult = shuffleAndTake(blendedArray, 8).map(item => ({
      name: item.name,
      image: item.image,
      id: `${item.id}-copy`,
      isOpen: false,
    }));
    result.push(...copyResult);
  }

  return result;
};

export {blendedResidents};
