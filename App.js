import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('')
  const [confirmCode ,setConfirmCode] = useState('')
  const [answerCode, setanswerCode] = useState('')
  const [colorState, setColorState] = useState('')

  const validCodeChange = (text) => {
    if(text === validCode) {
      // setValidCode(text)
      setConfirmCode(text)
      setanswerCode('輸入正確！')
      setColorState(styles.rightResult)
      
    } else {
      // setValidCode(text)
      setConfirmCode(text)
      setanswerCode('輸入錯誤！')
      setColorState(styles.wrongResult)
      
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.uiStyle}>
        <Text style={styles.textStyle}>請輸入您的手機號碼:</Text>
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
        <Text style={styles.textStyle}>再次輸入您的手機號碼:</Text>
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
        <Text style={styles.textStyle}>再次輸入的手機號碼是：</Text>
        <Text style={[styles.rightResult,{color:'#222'}]}>{confirmCode}</Text>
        <Text style={colorState}>{answerCode}</Text>
      </View>

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
    borderColor: '#222', 
    borderWidth: 2, 
    backgroundColor: 'white', 
    color: '#222', 
    fontSize: 24, 
    textAlign: 'center',
    margin: 16 
  },

  textStyle: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },

  rightResult: {
    width: 'auto',
    height: '28px',
    marginTop: 8,
    color:'green',
    fontSize: 24,
    textAlign: 'center',
  },

  wrongResult: {
    width: 'auto',
    height: '28px',
    marginTop: 8,
    color:'red',
    fontSize: 24,
    textAlign: 'center',
  },

  uiStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto', 
    backgroundColor: 'orange',
    boxShadow: '8px 8px 16px rgba(0,0,0,0.5)',
    padding: 32,
    borderRadius: 16,
    color: 'white', 
  },


});
