import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';

const ProfileType = ({ navigation }) => {

    return (
        <View style={styles.main}>
            {/* header */}
            <View style={{ width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => (navigation.goBack())}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', left: 10 }}>Select profile type</Text>
            </View>
            <View style={{ left: 10 }}>
                <Text style={{ color: 'grey' }}>Select the profile type</Text>
            </View>
            <View style={{ height: '30%', flexDirection: 'row', justifyContent: 'space-around', top: '10%', }}>
                <TouchableOpacity style={{justifyContent:'center', width: '45%', height: '100%', backgroundColor: '#ffff', padding: 8, alignItems: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 10 }}>
                    <Image source={require('../../assests/icons/patinet.png')} style={{ }} />
                    <Text style={{ color: 'black', fontWeight: '400', marginTop: '15%', fontSize: 18 }}>Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center', width: '45%', height: '100%', backgroundColor: '#fff', padding: 8, alignItems: 'center', borderWidth: 1, borderColor: 'grey', borderRadius: 10 }}>
                    
                    <Image source={require('../../assests/icons/caretaker.png')} style={{ }} />
                    <Text style={{ color: 'black', fontWeight: '400', marginTop: '15%', fontSize: 18 }}>Caretaker</Text>
                </TouchableOpacity>
            </View>

            {/* bottom buttons  */}
            <View style={styles.buttomButtonConatiner}>

                <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={() => (navigation.navigate('InvitationSent'))}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileType

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