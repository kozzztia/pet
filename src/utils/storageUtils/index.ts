import AsyncStorage from '@react-native-async-storage/async-storage';

const setNameToStorage = async (name: string) => {
  AsyncStorage.setItem('name', name);
};

const getNameFromStorage = async () => {
  const name = await AsyncStorage.getItem('name');
  return name;
};

const clearNameFromStorage = async () => {
  AsyncStorage.removeItem('name');
};

export {setNameToStorage, getNameFromStorage, clearNameFromStorage};
