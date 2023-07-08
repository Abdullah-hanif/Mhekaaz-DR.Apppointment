import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';

const VerificationOtp = ({ navigation }) => {
  const [otp, setOTP] = useState('');
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    setOTP((prevOTP) => {
      const updatedOTP = prevOTP.split('');
      updatedOTP[index] = text;
      return updatedOTP.join('');
    });

    if (text !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <View style={styles.main}>
      {/* header */}
      <View style={{ width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => (navigation.goBack())}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: '500', left: 10 }}>Verification code</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: 'grey' }}>Well send you a Verification code on your phone number</Text>
      </View>

      {/* Inputs */}
      <View style={styles.socialAuthBtn}>
        <View style={styles.container}>
          {Array.from({ length: 4 }, (_, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.input}
              value={otp[index]}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              maxLength={1}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoFocus={index === 0}
            />
          ))}
        </View>
      </View>

      {/* send again otp button */}
      <View style={{ marginTop: '70%', alignSelf: 'center' }}>
        <Text style={{ color: 'grey' }}>The code will be send in 30 seconds...</Text>
      </View>
      <View style={styles.buttomButtonConatinerTwo}>
        <TouchableOpacity style={styles.buttomButtonInnerConatinerTwo} onPress={() => (navigation.navigate('VerificationOtp'))}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>Send again</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* bottom buttons  */}
      <View style={styles.buttomButtonConatiner}>

        <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={() => (navigation.navigate('ProfileType'))}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Done</Text>
          </View>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default VerificationOtp

const styles = StyleSheet.create({

  main: {
    backgroundColor: '#ffff',
    flex: 1,
    padding: '5%'
  },
  logo: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    top: 30
  },
  socialAuthBtn: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: "5%",

  },




  buttomButtonConatiner: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: "10%"
  },

  buttomButtonInnerConatiner: {
    top: 0,
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 360
  },
  buttomButtonConatinerTwo: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: "10%",
    borderWidth: 0.8,
    borderColor: 'grey',
    borderRadius: 360
  },

  buttomButtonInnerConatinerTwo: {
    top: 0,
    backgroundColor: 'transparent',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    borderRadius: 360
  },



  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    margin: 5,
    width: '100%',
    top: 15

  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})