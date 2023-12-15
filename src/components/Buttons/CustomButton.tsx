import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {COLORS} from '../../styles';

type buttonProps = {
  title: string;
  handler: () => void;
};

const CustomButton: React.FC<buttonProps> = ({title, handler}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handler}>
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
