import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const Display = ({input,result}) => {
  return (
   <View style={styles.display}>
           <Text style={styles.inputText}>{input || '0'}</Text>
           <Text style={styles.resultText}>{result}</Text>
         </View>
  )
}

export default Display

const styles = StyleSheet.create({
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
});
