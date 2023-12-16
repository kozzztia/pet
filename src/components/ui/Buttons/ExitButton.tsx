import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const ExitButton: React.FC = () => {
  const handleExit = () => {
    // You can perform any exit logic here
    // For example, you might want to show a confirmation dialog
    Alert.alert(
      'Exit App',
      'Are you sure you want to exit?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Exit', onPress: () => handleExitConfirmed()},
      ],
      {cancelable: true},
    );
  };

  const handleExitConfirmed = () => {
    console.log('Exit confirmed');
  };

  return (
    <TouchableOpacity onPress={handleExit} style={styles.button}>
      <Text style={styles.buttonText}>Exit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExitButton;
