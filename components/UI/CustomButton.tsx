import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({key,btn,handlePress}) => {
  return (
     <TouchableOpacity
                key={key||""}
                onPress={() => handlePress(btn)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFDEDE',
    padding: 16,
    borderRadius: 10,
    margin: 4,
    width: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
});
