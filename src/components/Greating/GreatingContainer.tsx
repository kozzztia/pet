import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../providers/ThemeProvider';
import {GreatingInput} from '../Inputs';
import {dictionary} from '../../consts/dictionary';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomButton} from '../Buttons';
import {Title} from '../Text';
import {SIZES} from '../../styles';

const GreatingContainer = () => {
  const {backgroundThemeColor} = useTheme();
  const {greating} = dictionary;

  const [inputValue, setInputValue] = useState<string>('');
  const [userName, setUserName] = useState<string | null>(null);

  const greatingHandler = async (value: string) => {
    setUserName(inputValue);
    AsyncStorage.setItem('name', value);
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

  return (
    <>
      <View style={[styles.container, {backgroundColor: backgroundThemeColor}]}>
        {userName && <Title title={userName} />}
        {!userName && (
          <GreatingInput
            value={inputValue}
            setValue={setInputValue}
            title={greating.placeHolder}
          />
        )}
        {!userName && (
          <CustomButton
            title={greating.button}
            handler={() => greatingHandler(inputValue)}
          />
        )}
        {userName && (
          <CustomButton
            title={greating.clear}
            handler={() => clearNameFromStorage()}
          />
        )}
      </View>
    </>
  );
};

export default GreatingContainer;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.mainPadding,
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
  },
});
