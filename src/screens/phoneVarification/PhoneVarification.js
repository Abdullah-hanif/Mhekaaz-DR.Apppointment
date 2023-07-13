import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

const PhoneVarification = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryCodeChange = (text) => {
        setCountryCode(text);
    };

    const handlePhoneNumberChange = (text) => {
        setPhoneNumber(text)
    };
    return (
        <View style={styles.main}>
            {/* logo  */}
            <View style={styles.logo}>
                <Image source={require('../../assests/images/Logo.jpg')} style={{ width: '100%', height: '40%' }} />
                <Text style={{ color: 'gray' }}>Add contact details </Text>
            </View>

            {/* Inputs */}
            <View style={styles.socialAuthBtn}>
                <View style={{ width: '100%', }}>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TextInput
                            style={{ height: 60, borderRadius: 100, width: '18%', textAlign: 'center', borderWidth: 0.8, top: 10 }}
                            placeholder="+91"
                            value={countryCode}
                            onChangeText={handleCountryCodeChange}
                            keyboardType="phone-pad"

                        />
                        <TextInput
                            placeholder='Phone number'
                            style={styles.emailinput}
                            value={phoneNumber}
                            onChangeText={handlePhoneNumberChange}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>
            </View>

            {/* bottom buttons  */}
            <View style={styles.buttomButtonConatiner}>
                <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={() => (navigation.navigate('VerificationOtp'))}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Verify</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default PhoneVarification

const styles = StyleSheet.create({

    main: {
        backgroundColor: '#ffff',
        flex: 1,
        padding: '3%'
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

    emailinput: {
        backgroundColor: 'transparent',
        height: 60, width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 360,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 0.8,
        top: 10
    },


    buttomButtonConatiner: {
        alignSelf: 'center',
        width: '100%',
        alignItems: 'center',
        marginTop: "80%"
    },

    buttomButtonInnerConatiner: {
        top: 0,
        backgroundColor: 'black',
        height: 50,
        width: '90%',
        justifyContent: 'center',
        borderRadius: 360
    },


})