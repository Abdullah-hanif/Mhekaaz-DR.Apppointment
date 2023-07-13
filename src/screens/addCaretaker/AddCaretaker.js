import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import HorizontalLine from '../../components/horizontalLine/HorizontalLine';

const AddCaretaker = ({ navigation }) => {
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
            {/* header */}
            <View style={{ width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => (navigation.goBack())}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', left: 10 }}>Add caretaker</Text>
            </View>
            <View style={{ left: 10 }}>
                <Text style={{ color: 'grey' }}>Input email or phone of the caretaker</Text>
            </View>
            <View style={styles.socialAuthBtn}>
                <View style={{ width: '100%', }}>
                    <Text style={{ left: '10%', fontWeight: '500' }}>Email</Text>
                    <TextInput placeholder='Email' style={styles.emailinput} />
                </View>
                {/* <View style={{ width: '100%', top: '10%' }}>
                    <Text style={{ left: '10%', fontWeight: '500' }}>Password</Text>
                    <TextInput placeholder='Password' style={styles.emailinput} />
                </View> */}

            </View>
            <View style={{ top: '5%' }}>
                <HorizontalLine text={'or'} />
            </View>

            <View style={styles.socialAuthBtn}>
                <View style={{ width: '100%', top: '40%' }}>
                    <Text style={{ left: '10%', fontWeight: '500' }}>Phone number</Text>
                    {/* <View style={{ width: '100%', }}> */}

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
                            style={styles.numberInput}
                            value={phoneNumber}
                            onChangeText={handlePhoneNumberChange}
                            keyboardType="phone-pad"
                        />
                    </View>
                    {/* </View> */}
                </View>


            </View>

            {/* bottom buttons  */}
            <View style={styles.buttomButtonConatiner}>

                <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={() => (navigation.navigate('HomeScreen'))}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Send invite</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddCaretaker

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

    emailinput: {
        backgroundColor: 'transparent',
        height: 60, width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 360,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 0.8,
        top: 5
    },
    numberInput: {
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
        marginTop: "90%"
    },

    buttomButtonInnerConatiner: {
        top: 0,
        backgroundColor: 'black',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 360
    },



})