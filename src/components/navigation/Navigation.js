import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeVitalMonitorTap from '../../screenComponents/HomeVitalMonitorTap';
import HomeVitalMonitorTapContent from '../../screenComponents/HomeVitalMonitorTapContent';
import MedScheduleTap from '../../screenComponents/MedScheduleTap';
import MedicinesMedTap from '../../screenComponents/MedicinesMedTap';
import { AddCaretaker, FallDetection, FallDetectionHistory, HomeScreen, LoginWithEmail, MedicalReport, Medicines, MedicinesName, Notifications, PersonalInformation, PhoneVarification, ProfileOptions, ProfileType, SavedLocations, TermAndCond, VerificationOtp, VitalMonitoring, VitalMonitoringBodyTem, VitalMonitoringPulseRate } from '../../screens/Index';
import Appointments from '../../screens/appointments/Appointments';
import AuthLogin from '../../screens/authLogin/AuthLogin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}
                initialRouteName='AuthLogin'>
                <Stack.Screen name="AuthLogin" component={AuthLogin} />
                <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
                <Stack.Screen name="PhoneVarification" component={PhoneVarification} />
                <Stack.Screen name="VerificationOtp" component={VerificationOtp} />
                <Stack.Screen name="ProfileType" component={ProfileType} />
                <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
                <Stack.Screen name="AddCaretaker" component={AddCaretaker} />
                <Stack.Screen name="HomeScreen" component={MyTabs} />
                <Stack.Screen name="Medicines" component={MyTabs} />
                <Stack.Screen name="MedicinesName" component={MedicinesName} />
                <Stack.Screen name="Appointments" component={MyTabs} />
                <Stack.Screen name="VitalMonitoring" component={MyTabs} />
                <Stack.Screen name="VitalMonitoringBodyTem" component={VitalMonitoringBodyTem} />
                <Stack.Screen name="VitalMonitoringPulseRate" component={VitalMonitoringPulseRate} />
                <Stack.Screen name="MedicalReport" component={MyTabs} />
                <Stack.Screen name="ProfileOptions" component={ProfileOptions} />
                <Stack.Screen name="FallDetection" component={FallDetection} />
                <Stack.Screen name="FallDetectionHistory" component={FallDetectionHistory} />
                <Stack.Screen name="SavedLocations" component={SavedLocations} />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="TermAndCond" component={TermAndCond} />
                

                {/* screen components  */}
                <Stack.Screen name="HomeVitalMonitorTap" component={HomeVitalMonitorTap} />
                <Stack.Screen name="HomeVitalMonitorTapContent" component={HomeVitalMonitorTapContent} />
                <Stack.Screen name="MedicinesMedTap" component={MedicinesMedTap} />
                <Stack.Screen name="MedScheduleTap" component={MedScheduleTap} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}



// @bottom navigations
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#ffff",
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: '#b4a79b',
                tabBarStyle: {
                    height: 70,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#86705d',
                    borderTopWidth: 0,
                },
            })}

        >
            {/* @screens */}
            <Tab.Screen name="HomeScreenBottom" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        const icon = focused ? "home" : "home";
                        return (
                            <FontAwesome5 name={icon} size={24} color={color} />
                        )
                    },
                }} />
            <Tab.Screen name="MedicinesBottom" component={Medicines}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        const icon = focused ? "pill" : "pill";
                        return (
                            <MaterialCommunityIcons name={icon} size={24} color={color} />
                        )
                    },
                }} />
            <Tab.Screen name="MeAppointmentBottom" component={Appointments}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        const icon = focused ? "calendar" : "calendar";
                        return (
                            <AntDesign name={icon} size={24} color={color} />
                        )
                    },
                }} />
            <Tab.Screen name="VitalMonitoringBottom" component={VitalMonitoring}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        const icon = focused ? "clipboard-pulse" : "clipboard-pulse";
                        return (
                            <MaterialCommunityIcons name={icon} size={24} color={color} />
                        )
                    },
                }} />
            <Tab.Screen name="MedicalReportBottom" component={MedicalReport}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        const icon = focused ? "newspaper-outline" : "newspaper-outline";
                        return (

                            <Ionicons name="newspaper-outline" size={24} color={color} />
                        )
                    },
                }} />

        </Tab.Navigator>
    );
}

export default Navigation

const styles = StyleSheet.create({})