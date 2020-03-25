import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const [answerCode, setanswerCode] = useState('')

  const validCodeChange = (text) => {
    if(text === '1234567890') {
      setValidCode(text)
      setanswerCode('輸入成功！')
    } else {
      setValidCode(text)
      setanswerCode('手機輸入錯誤！')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on my great app!</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={validCodeChange}
        value={validCode}
        maxLength={10}
        placeholder='please type numbers'
        keyboardType={'numeric'}
        secureTextEntry={true}
        editable={true}
        autoFocus={false}
      />
      <Text>您輸入的手機號碼是：</Text>
      <Text>{validCode}</Text>
      <Text>{answerCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 50, 
    width: 300, 
    borderRadius: 0, 
    borderColor: 'darkgray', 
    borderWidth: 5, 
    backgroundColor: 'gray', 
    color: 'white', 
    fontSize: 28, 
    textAlign: 'center' 
  }
});
