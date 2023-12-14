import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../providers/ThemeProvider';
import {COLORS, SIZES} from '../../styles';
import {GreatingInput} from '../Inputs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {dictionary} from '../../consts/dictionary';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GreatingContainer = () => {
  const {titleThemeColor} = useTheme();
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
      <View style={[styles.container, {backgroundColor: COLORS.decorColor}]}>
        {userName && <Text>{userName}</Text>}
        {!userName && (
          <GreatingInput
            value={inputValue}
            setValue={setInputValue}
            title={greating.placeHolder}
          />
        )}
        {!userName && (
          <Button
            title={greating.button}
            onPress={() => greatingHandler(inputValue)}
          />
        )}

        {userName && (
          <Button
            title={greating.clear}
            onPress={() => clearNameFromStorage()}
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
