import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'


const Notifications = ({ navigation }) => {
    const [popup, setPopup] = useState(false);
    const [appNotification, setAppNotification] = useState(false);
    const [vibration, setVibration] = useState(false);
    const toggleSwitchPopup = () => setPopup(previousState => !previousState);
    const toggleSwitchAppNotif = () => setAppNotification(previousState => !previousState);
    const toggleSwitchVibration = () => setVibration(previousState => !previousState);
    return (
        <View style={styles.main}>

            <GlobalHeader
                LIcon={<AntDesign name="left" size={24} color="black" />}
                text={'Fall detection'}
                onPress={() => navigation.goBack()}
            />
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 5, margin: 5, borderBottomWidth: 1, borderBottomColor: '#fbf8f3' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Popup notifications</Text>
                <Switch
                    trackColor={{ false: '#d3cbc4', true: '#86705d' }}
                    thumbColor={popup ? '#f4f1ee' : '#f4f1ee    '}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchPopup}
                    value={popup}
                />

            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 5, margin: 5, borderBottomWidth: 1, borderBottomColor: '#fbf8f3' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>App notifications</Text>
                <Switch
                    trackColor={{ false: '#d3cbc4', true: '#86705d' }}
                    thumbColor={appNotification ? '#f4f1ee' : '#f4f1ee    '}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchAppNotif}
                    value={appNotification}
                />

            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 5, margin: 5, borderBottomWidth: 1, borderBottomColor: '#fbf8f3' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Vibration</Text>
                <Switch
                    trackColor={{ false: '#d3cbc4', true: '#86705d' }}
                    thumbColor={vibration ? '#f4f1ee' : '#f4f1ee    '}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchVibration}
                    value={vibration}
                />

            </View>

        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        backgroundColor: '#fffcf9',
        flex: 1
    },

})