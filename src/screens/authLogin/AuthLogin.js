import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import HorizontalLine from '../../components/horizontalLine/HorizontalLine';

const AuthLogin = ({ navigation }) => {
  return (
    <View style={styles.main}>
      {/* logo  */}
      <View style={styles.logo}>
        <Image source={require('../../assests/images/Logo.jpg')} style={{ width: '25%', height: '60%' }} />
        <Text style={{fontWeight:'300',fontSize:16,color:'#92979D'}}>Add email credentials</Text>
      </View>

      {/* Social Auth buttons  */}
      <View style={styles.socialAuthBtn}>
        <TouchableOpacity style={styles.innerFBBtn} onPress={() => (navigation.navigate('LoginWithEmail'))}>
          <View style={styles.FBBtnContainer}>
            <Entypo name="facebook-with-circle" size={30} color="black" />
            <Text style={{ left: 10, color: 'black', fontWeight: '600', fontSize: 18 }}>Login via facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerGoogleBtn} onPress={() => (navigation.navigate('LoginWithEmail'))}>
          <View style={styles.googleauthconatiner}>
            <AntDesign name="google" size={30} color="black" />
            <Text style={{ left: 10, color: 'black', fontWeight: '600', fontSize: 18 }}>Login via google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerEmailbtn}>
          <View style={styles.emailConatinerButton}>
            <MaterialIcons name="email" size={30} color="black" />
            <Text style={{ left: 10, color: 'black', fontWeight: '600', fontSize: 18 }} onPress={() => (navigation.navigate('LoginWithEmail'))}>Login via Email</Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: '25%' }}>
        <HorizontalLine text="or" />
      </View>

      {/* pohone n0. buttons  */}
      <View style={styles.buttomButtonConatiner}>
        <TouchableOpacity style={styles.buttomButtonInnerConatiner}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Get started phone number</Text>
          </View>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default AuthLogin

const styles = StyleSheet.create({

  main: {
    backgroundColor: '#ffff',
    flex: 1
  },
  logo: {
    width: '100%',
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    top: 30
  },
  socialAuthBtn: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: "20%",
  },
  innerFBBtn: {
    top: '20%',
    borderColor: 'gray',
    borderWidth: 0.8,
    backgroundColor: 'transparent',
    height: 60, width: '85%',
    justifyContent: 'center',
    borderRadius: 360
  },
  FBBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 25
  },
  innerGoogleBtn: {
    top: '30%',
    borderColor: 'gray',
    borderWidth: 0.8,
    backgroundColor: 'transparent',
    height: 60, width: '85%',
    justifyContent: 'center',
    borderRadius: 360
  }
  ,
  googleauthconatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 25
  },
  innerEmailbtn: {
    top: '40%',
    borderColor: 'gray',
    borderWidth: 0.8,
    backgroundColor: 'transparent',
    height: 60, width: '85%',
    justifyContent: 'center',
    borderRadius: 360
  },
  emailConatinerButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    left: 25
  },
  buttomButtonConatiner: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: "5%"
  },

  buttomButtonInnerConatiner: {
    top: 0,
    backgroundColor: 'black',
    height: 60,
    width: '85%',
    justifyContent: 'center',
    borderRadius: 360
  }
})