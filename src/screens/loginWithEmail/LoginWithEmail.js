import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const LoginWithEmail = ({navigation}) => {
    return (
        <View style={styles.main}>
            {/* logo  */}
            <View style={styles.logo}>
                <Image source={require('../../assests/images/Logo.jpg')} style={{ width: '100%', height: '40%' }} />
                <Text style={{ color: 'gray' }}>Add email credentials</Text>
            </View>

            {/* Inputs */}
            <View style={styles.socialAuthBtn}>
                <View style={{ width: '100%', }}>
                    <Text style={{ left: '10%', fontWeight: '500' }}>Email</Text>
                    <TextInput placeholder='Email' style={styles.emailinput} />
                </View>
                <View style={{ width: '100%', top: '10%' }}>
                    <Text style={{ left: '10%', fontWeight: '500' }}>Password</Text>
                    <TextInput placeholder='Password' style={styles.emailinput} />
                </View>

            </View>


            {/* bottom buttons  */}
            <View style={styles.buttomButtonConatiner}>
                <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={()=>(navigation.navigate( 'PhoneVarification'))}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Next</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default LoginWithEmail

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


    buttomButtonConatiner: {
        alignSelf: 'center',
        width: '100%',
        alignItems: 'center',
        marginTop: "50%"
    },

    buttomButtonInnerConatiner: {
        top: 0,
        backgroundColor: 'black',
        height: 50,
        width: '90%',
        justifyContent: 'center',
        borderRadius: 360
    }
})