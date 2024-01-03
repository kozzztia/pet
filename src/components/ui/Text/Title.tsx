import * as React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {useTheme} from '../../../providers/ThemeProvider';
import {SIZES} from '../../../styles';

type titleProps = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const Title: React.FC<titleProps> = ({title, style}) => {
  const {titleThemeColor} = useTheme();
  return (
    <Text style={[styles.title, style, {color: titleThemeColor}]}>{title}</Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.titleSize,
    textAlign: 'left',
    padding: SIZES.mainPadding,
  },
});
