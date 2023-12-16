import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {GreatingInput} from '../ui/Inputs';
import {dictionary} from '../../consts/dictionary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton} from '../ui/Buttons';
import {Title} from '../ui/Text';
import {ViewContainer} from '../ui/Containers';

const GreatingContainer = () => {
  const {greating} = dictionary;

  const [inputValue, setInputValue] = useState<string>('');
  const [userName, setUserName] = useState<string | null>(null);

  const greatingHandler = async (value: string) => {
    const name = value.trim();
    setUserName(inputValue);
    AsyncStorage.setItem('name', name);
    setInputValue('');
  };

  const getNameFromStorage = async () => {
    const name = await AsyncStorage.getItem('name');
    return name;
  };

  const clearNameFromStorage = () => {
    AsyncStorage.removeItem('name');
    setUserName(null);
  };

  useEffect(() => {
    getNameFromStorage().then(name => setUserName(name));
  }, []);

  return userName ? (
    <ViewContainer row>
      <Title title={`${greating.message} ${userName}`} />
      <CustomButton
        style={styles.button}
        title={greating.clear}
        handler={() => clearNameFromStorage()}
      />
    </ViewContainer>
  ) : (
    <ViewContainer row>
      <GreatingInput
        value={inputValue}
        setValue={setInputValue}
        title={greating.placeHolder}
      />
      <CustomButton
        style={styles.button}
        title={greating.button}
        handler={() => greatingHandler(inputValue)}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 'auto',
  },
});

export default GreatingContainer;
