import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTheme} from '../../../providers/ThemeProvider';
import {SIZES} from '../../../styles';

type titleProps = {
  title: string;
};

const Title: React.FC<titleProps> = ({title}) => {
  const {titleThemeColor} = useTheme();
  return <Text style={{...styles.title, color: titleThemeColor}}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.titleSize,
    textAlign: 'center',
    padding: SIZES.mainPadding,
    textTransform: 'capitalize',
  },
});
