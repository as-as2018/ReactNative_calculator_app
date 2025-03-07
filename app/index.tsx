import CustomButton from '@/components/UI/CustomButton';
import Display from '@/components/UI/Display';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <View style={styles.container}>
      <Display input={input} result={result}/>
      <View style={styles.buttonGrid}>
        {buttons.map((btn, index) => (
          <CustomButton key={index} btn={btn} handlePress={handlePress}/>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    padding: 16,
  },
  display: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    width: 320,
    marginBottom: 16,
  },
  inputText: {
    fontSize: 24,
    textAlign: 'right',
    paddingVertical: 8,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'right',
    paddingVertical: 8,
    color: 'gray',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 320,
  },
});
