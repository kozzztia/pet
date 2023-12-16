import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {COLORS} from '../../styles';

type buttonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  handler: () => void;
};

const CustomButton: React.FC<buttonProps> = ({title, handler, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handler}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.decorColor,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
