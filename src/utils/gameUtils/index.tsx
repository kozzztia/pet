import {GameResident, Resident} from '../../types/residentType';

// const getRandomArray = (length: number): number[] => {
//   const array: number[] = [];
//   while (array.length < length) {
//     const randomNumber: number = Math.floor(Math.random() * length);
//     if (!array.includes(randomNumber)) {
//       array.push(randomNumber);
//     }
//   }
//   return array;
// };

// const blended = (array: GameResident[], position: number[]): GameResident[] => {
//   let result: GameResident[] = [];
//   for (let i = 0; i < position.length; i++) {
//     result.push(array[position[i]]);
//   }
//   return result;
// };

const blendedResidents = (residents: Resident[]): GameResident[] => {
  let result: GameResident[] = [];
  if (!residents.length) {
    result = [];
  }
  if (residents.length > 0) {
    residents.forEach(item => {
      result.push({
        name: item.name,
        image: item.image,
        id: `${item.id}-copy`,
        isOpen: false,
      });
    });
  }
  return result;
};
export {blendedResidents};
