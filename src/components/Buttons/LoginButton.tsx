import * as React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {COLORS} from '../../styles';

const LoginButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log(props);
      }}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.decorColor,
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.titleColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
