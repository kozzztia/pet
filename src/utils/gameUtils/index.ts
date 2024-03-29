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

const blended = <T>(array: T[]): T[] => {
  const result: T[] = [];
  const position = getRandomArray(array.length);
  if (array.length < 8) {
    for (let i = 0; i < array.length; i++) {
      result.push(array[position[i]]);
    }
  }
  if (array.length >= 8 && array.length < 18) {
    for (let i = 0; i < 8; i++) {
      result.push(array[position[i]]);
    }
  }
  if (array.length >= 18 && array.length < 32) {
    for (let i = 0; i < 18; i++) {
      result.push(array[position[i]]);
    }
  }
  if (array.length >= 32) {
    for (let i = 0; i < 32; i++) {
      result.push(array[position[i]]);
    }
  }
  return result;
};

const resultBlend = <G>(array: G[]) => {
  const result: G[] = [];
  const position = getRandomArray(array.length);
  for (let i = 0; i < array.length; i++) {
    result.push(array[position[i]]);
  }
  return result;
};

const blendedResidents = (residents: Resident[]): GameResident[] => {
  let result: GameResident[] = [];
  let copyResult: GameResident[] = [];

  const blendedArray = blended(residents);

  if (blendedArray.length > 0 && residents.length < 8) {
    blendedArray.forEach(item => {
      result.push({
        name: item.name,
        image: item.image,
        id: `${item.id}`,
        isOpen: true,
      });
    });
  }
  if (blendedArray.length >= 8) {
    blendedArray.forEach(item => {
      result.push({
        name: item.name,
        image: item.image,
        id: `${item.id}-original`,
        isOpen: true,
      });
      copyResult.push({
        name: item.name,
        image: item.image,
        id: `${item.id}-copy`,
        isOpen: true,
      });
    });
  }

  return resultBlend([...result, ...copyResult]);
};

export {blendedResidents};
