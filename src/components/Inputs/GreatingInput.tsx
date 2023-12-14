import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

type GreatingInputType = {
  title: string;
  value: string;
  setValue: (text: string) => void;
};

const GreatingInput: React.FC<GreatingInputType> = ({
  value,
  setValue,
  title,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={title}
      value={value}
      onChangeText={text => setValue(text)}
    />
  );
};

export default GreatingInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
  },
});
