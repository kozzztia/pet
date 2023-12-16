import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {GreatingInput} from '../Inputs';
import {dictionary} from '../../consts/dictionary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton} from '../Buttons';
import {Title} from '../Text';

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
    <View style={styles.container}>
      <Title title={`${greating.message} ${userName}`} />
      <CustomButton
        style={styles.button}
        title={greating.clear}
        handler={() => clearNameFromStorage()}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <GreatingInput
        value={inputValue}
        setValue={setInputValue}
        title={greating.placeHolder}
      />
      <CustomButton
        title={greating.button}
        handler={() => greatingHandler(inputValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  button: {
    marginLeft: 'auto',
  },
});

export default GreatingContainer;
