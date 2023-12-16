import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useTheme} from '../../providers/ThemeProvider';
import {COLORS, SIZES} from '../../styles';

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
  const {titleThemeColor} = useTheme();
  return (
    <TextInput
      style={{...styles.input, color: titleThemeColor}}
      placeholder={title}
      placeholderTextColor={titleThemeColor}
      value={value}
      selectionColor={COLORS.decorColor}
      onChangeText={text => setValue(text)}
    />
  );
};

export default GreatingInput;

const styles = StyleSheet.create({
  input: {
    fontSize: SIZES.mainSize,
  },
});
