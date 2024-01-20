import React from 'react';
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

const blended = (array: Resident[]): Resident[] => {
  const result: Resident[] = [];
  const position = getRandomArray(array.length);
  if (array.length < 8) {
    for (let i = 0; i < array.length; i++) {
      result.push(array[position[i]]);
    }
  }
  if (array.length >= 8) {
    for (let i = 0; i < 8; i++) {
      result.push(array[position[i]]);
    }
  }
  return result;
};

const resultBlend = (array: GameResident[]) => {
  const result: GameResident[] = [];
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
        isOpen: false,
      });
    });
  }
  if (blendedArray.length >= 8) {
    blendedArray.forEach(item => {
      result.push({
        name: item.name,
        image: item.image,
        id: `${item.id}-original`,
        isOpen: false,
      });
      copyResult.push({
        name: item.name,
        image: item.image,
        id: `${item.id}-copy`,
        isOpen: false,
      });
    });
  }

  return resultBlend([...result, ...copyResult]);
};

export {blendedResidents};
