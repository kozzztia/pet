import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useTheme} from '../../../providers/ThemeProvider';
import {COLORS, SIZES} from '../../../styles';

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
      style={{
        ...styles.input,
        color: titleThemeColor,
      }}
      placeholder={title}
      placeholderTextColor={titleThemeColor}
      value={value}
      selectionColor={COLORS.decorColor}
      onChangeText={text =>
        text.length <= 10 ? setValue(text.trim()) : setValue(value.trim())
      }
    />
  );
};

export default GreatingInput;

const styles = StyleSheet.create({
  input: {
    fontSize: SIZES.mainSize,
    textTransform: 'capitalize',
    flex: 1,
    textAlign: 'left',
    height: SIZES.minComtainerHeight,
  },
});
