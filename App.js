import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const [confirmCode ,setConfirmCode] = useState('')
  const [answerCode, setanswerCode] = useState('')

  const validCodeChange = (text) => {
    if(text === validCode) {
      // setValidCode(text)
      setConfirmCode(text)
      setanswerCode('輸入成功！')
    } else {
      // setValidCode(text)
      setConfirmCode(text)
      setanswerCode('手機輸入錯誤！')
    }
  }
  
  const tooShort = {
    enabled: true,
    label: 'Too short',
    labelColor: 'red'
  }

  return (
    <View style={styles.container}>
      <Text>請輸入您的手機號碼</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text)=>{setValidCode(text)}}
        value={validCode}
        maxLength={10}
        placeholder='please type numbers'
        keyboardType={'numeric'}
        secureTextEntry={true}
        editable={true}
        autoFocus={false}
      />
      <Text>再次輸入您的手機號碼</Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={validCodeChange}
        value={confirmCode}
        maxLength={10}
        placeholder='please type numbers'
        keyboardType={'numeric'}
        secureTextEntry={true}
        editable={true}
        autoFocus={false}
      />
      <Text>再次輸入的手機號碼是：</Text>
      <Text>{confirmCode}</Text>
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
    borderRadius: 16, 
    borderColor: 'darkgray', 
    borderWidth: 5, 
    backgroundColor: 'gray', 
    color: 'white', 
    fontSize: 28, 
    textAlign: 'center',
    margin: 16 
  }
});
