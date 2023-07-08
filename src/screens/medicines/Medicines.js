import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import DaysSelectionHeader from '../../components/daysSelectionHeader/DaysSelectionHeader';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import TopTabNavigator from '../../components/topTapNavigators/TopTabNavigator ';
import HomeVitalMonitorTap from '../../screenComponents/HomeVitalMonitorTap';
import MedicinesMedTap from '../../screenComponents/MedicinesMedTap';
import MedScheduleTap from '../../screenComponents/MedScheduleTap';


const Medicines = ({ navigation }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const days = [
        {
            id: 1,
            day: 'Monday',
            date: '23'
        },
        {
            id: 2,
            day: 'Tuesday',
            date: '24'
        },

        {
            id: 3,
            day: 'Wednesday',
            date: '25'
        },
        {
            id: 4,
            day: 'Thursday',
            date: '26'
        },
        {
            id: 5,
            day: 'Friiday',
            date: '27'
        },
        {
            id: 6,
            day: 'Saturday',
            date: '28'
        },
        {
            id: 7,
            day: 'Sunday',
            date: '29'
        },
    ]
    const handleCategoryPress = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    return (
        <View style={styles.main}>

            {/* global header */}
            <GlobalHeader
                LIcon={<MaterialCommunityIcons name="pill" size={24} color="black" />}
                text={'Medicines'}
                Icon={<FontAwesome name="bell-o" size={24} color="black" />}
            />
            {/* days selection view */}

            <View style={{ marginTop: '5%', height: 130 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {days.map((day) => (
                        <DaysSelectionHeader
                            onPress={handleCategoryPress}
                            key={day.id}
                            day={day}
                        />
                    ))}
                </ScrollView>
            </View>
            <ScrollView style={{ top: 10, flex: 1 }}>
                <TopTabNavigator
                    firstTap={true}
                    secondTap={true}
                    thirdTap={false}
                    firstView={<MedScheduleTap />}
                    secondView={<MedicinesMedTap onPress={() => (navigation.navigate('MedicinesName'))} />}
                    TabOneName={'Schedule'}
                    TabTwoName={'Medicines'}

                />

            </ScrollView>
        </View>
    )
}

export default Medicines

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 5,
        margin: 5,
        top: 0,
        bottom: 0,
        backgroundColor: '#ffff'

    },
    AlertBell: {
        backgroundColor: '#da0000',
        height: 70,
        width: 70,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'column',
        top: '90%',
        zIndex: 99999,
        right: 15,
        borderRadius: 360
    }
})