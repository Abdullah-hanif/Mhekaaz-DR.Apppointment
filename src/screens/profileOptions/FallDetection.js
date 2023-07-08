import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'


const FallDetection = ({navigation}) => {
    const mainHead = 'Connect gyroscope device';
    const subHead = 'Please Connect gyroscope device with this application, you will get the notification alert whenever fall detection occurs.'
    const qouteText = 'Learn more about device';
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.AlertBell} >
                <MaterialIcons name="notifications-on" size={35} color="#fff" />
            </TouchableOpacity  >
            <GlobalHeader
                LIcon={<AntDesign name="left" size={24} color="black" />}
                text={'Fall detection'}
                onPress={()=>navigation.goBack()}
            />
            <View style={{ marginTop: '40%', alignItems: 'center', padding: 10, margin: 10 }}>
                <Text style={{ color: '#988474', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>{mainHead}</Text>
                <Text style={{ color: '#e5dfd9', fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: '2%' }}>{subHead}</Text>
                <Text style={{ color: '#a59485', fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: '2%' }}>{qouteText}</Text>
            </View>
            <TouchableOpacity style={{ marginTop: '50%', width: '90%', height: 50, backgroundColor: '#fffcf9', borderRadius: 25, borderColor: '#bbada1', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} onPress={()=>navigation.navigate('FallDetectionHistory')}>
                <Text style={{ color: '#bbada1', fontWeight: 'bold' }}>Connect</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FallDetection

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        backgroundColor: '#fffcf9',
        flex: 1
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
        top: '85%',
        zIndex: 99999,
        right: 15,
        borderRadius: 360
    }
})