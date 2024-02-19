export const getRundomImageIndex = (length: number): number => {
  return Math.floor(Math.random() * length);
};

export const getRundomPosition = (length: number, limit: number): number => {
  return Math.floor(Math.random() * (length - limit));
};

export const getRundomSize = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
