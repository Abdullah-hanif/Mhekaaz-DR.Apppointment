import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { cutString } from '../utility/Utility'


const DaysSelectionHeader = ({ day, onPress }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setIsSelected(!isSelected);
        onPress(day.id);
    };

    return (
        // <ScrollView horizontal={true} style={{ height: '100%', width: '100%', marginTop: '5%' }}>

        <TouchableOpacity style={{ borderWidth: 0.8, borderColor: 'black', padding: 5, margin: 5, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: isSelected ? '#86705d' : 'white', height: '80%', width: 60, borderRadius: 50, alignItems: 'center', alignContent: 'center' }} onPress={handlePress} key={day.id}>
            <Text style={{ alignSelf: 'center', fontWeight: '400', fontSize: 18, color: isSelected ? 'white' : 'black' }}>  {cutString(day?.day, 0, 3) ?? ''} </Text>
            <Text style={{ alignSelf: 'center', fontWeight: '400', fontSize: 18, color: isSelected ? 'white' : 'black' }}>  {cutString(day?.date, 0, 2) ?? ''} </Text>
        </TouchableOpacity>
        // </ScrollView>
    )
}

export default DaysSelectionHeader;

export const DayNameSelectionHeader = ({ day, onPress }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setIsSelected(!isSelected);
        onPress(day.id);
    };

    return (
        // <ScrollView horizontal={true} style={{ height: '100%', width: '100%', marginTop: '5%' }}>

        <TouchableOpacity style={{  padding: 5, margin: 5, flexDirection: 'column', justifyContent: 'space-around', backgroundColor: isSelected ? '#86705d' : '#efe7de', height: '90%', width: 50, borderRadius: 350, alignItems: 'center', alignContent: 'center' }} onPress={handlePress} key={day.id}>
            <Text style={{ alignSelf: 'center', fontWeight: '400', fontSize: 14, color: isSelected ? 'white' : '#bdafa1' }}>  {cutString(day?.day, 0, 3) ?? ''} </Text>
           
        </TouchableOpacity>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({})