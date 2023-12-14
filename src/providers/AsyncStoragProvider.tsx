import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageContextProps {
  children: React.ReactNode;
}

interface AsyncStorageContextType {
  storedValue: string | null;
  saveValue: (value: string) => Promise<void>;
  clearStorage: () => Promise<void>;
}

const AsyncStorageContext = createContext<AsyncStorageContextType | undefined>(
  undefined,
);

export const useAsyncStorage = (): AsyncStorageContextType => {
  const context = useContext(AsyncStorageContext);
  if (!context) {
    throw new Error(
      'useAsyncStorage must be used within an AsyncStorageProvider',
    );
  }
  return context;
};
export const AsyncStorageProvider: React.FC<AsyncStorageContextProps> = ({
  children,
}) => {
  const [storedValue, setStoredValue] = useState<string | null>(null);

  useEffect(() => {
    loadStoredValue();
  }, []);

  const loadStoredValue = async () => {
    try {
      const value = await AsyncStorage.getItem('myKey');
      setStoredValue(value);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveValue = async (value: string) => {
    try {
      // Save the value to AsyncStorage
      await AsyncStorage.setItem('myKey', value);
      // Update the stored value state
      setStoredValue(value);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('myKey');
    } catch (error) {
      console.error('Error remove data:', error);
    }
  };

  const contextValue: AsyncStorageContextType = {
    storedValue,
    saveValue,
    clearStorage,
  };

  return (
    <AsyncStorageContext.Provider value={contextValue}>
      {children}
    </AsyncStorageContext.Provider>
  );
};
