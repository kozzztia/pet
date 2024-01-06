export const getBlendedId = (count: number): number[] => {
  let array: number[] = [];
  while (array.length < count*2) {
    const randomNumber: number = Math.floor(Math.random() * count*2) + 1;
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
};
