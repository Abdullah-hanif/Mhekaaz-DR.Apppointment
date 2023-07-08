import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomDropDown } from '../../components/customDropdown/CustomDropDown';
import DateAndTimePciker from '../../components/dateAndTimePicker/DateAndTimePciker';
import { RadioButton } from 'react-native-paper';

const PersonalInformation = ({ navigation }) => {
    const [checked, setChecked] = useState('option1');

    const handleRadioPress = (value) => {
        setChecked(value);
    };
    return (
        <View style={styles.main}>
            {/* header */}
            <View style={{ width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => (navigation.goBack())}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '500', left: 10 }}>Personal information</Text>
            </View>
            <ScrollView style={{ marginTop: '5%' }}>
                <View style={{ left: 10 }}>
                    <Text style={{ color: 'grey' }}>Add the disease.you are suffering through with its staring date</Text>
                </View>
                {/* Inputs */}
                <View style={styles.socialAuthBtn}>
                    <View style={{ width: '100%', }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>Email</Text>
                        <TextInput placeholder='Email' style={styles.emailinput} />
                    </View>
                    <View style={{ width: '100%', top: '10%' }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>Blood group</Text>
                        <View style={{ backgroundColor: 'transparent', top: 5, height: 60, width: '90%', alignSelf: 'center', justifyContent: "center", borderColor: 'grey', borderRadius: 360, borderWidth: 0.8, padding: 20 }}>
                            <CustomDropDown />
                        </View>
                    </View>
                    <View style={{ width: '100%', top: '20%' }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>DOB</Text>
                        <View style={{ backgroundColor: 'transparent', top: 5, height: 60, width: '90%', alignSelf: 'center', justifyContent: "center", borderColor: 'grey', borderRadius: 360, borderWidth: 0.8, padding: 20 }}>
                            <DateAndTimePciker />
                        </View>
                    </View>
                    <View style={{ width: '100%', top: '30%' }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>Disease</Text>
                        <TextInput placeholder='Your disease name' style={styles.emailinput} />
                    </View>
                    <View style={{ width: '100%', top: '40%' }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>Staring date</Text>
                        <View style={{ backgroundColor: 'transparent', top: 5, height: 60, width: '90%', alignSelf: 'center', justifyContent: "center", borderColor: 'grey', borderRadius: 360, borderWidth: 0.8, padding: 20 }}>
                            <DateAndTimePciker />
                        </View>
                    </View>

                    <View style={{ width: '100%', top: '50%' }}>
                        <Text style={{ left: '10%', fontWeight: '500' }}>Gender</Text>
                        <View style={{ paddingLeft: 25 }}>
                            <RadioButton.Group onValueChange={handleRadioPress} value={checked}>
                                <View style={{ flexDirection: 'row' }}>
                                    <RadioButton.Item label="Male" value="Male" />
                                    <RadioButton.Item label="Female" value="Female" />
                                </View>
                            </RadioButton.Group>
                        </View>
                    </View>


                </View>

                {/* bottom buttons  */}
                <View style={styles.buttomButtonConatiner}>

                    <TouchableOpacity style={styles.buttomButtonInnerConatiner} onPress={() => (navigation.navigate('AddCaretaker'))}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Done</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default PersonalInformation

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
        marginTop: "10%",

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
        marginTop: "80%"
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