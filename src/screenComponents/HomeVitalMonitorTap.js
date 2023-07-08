import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeVitalMonitorTap = ({ onPress }) => {
  return (
    <View style={styles.main}>
      <View style={{ alignItems: 'center', top: 5 }}>
        <Image source={require('../assests/icons/VitalMonitoring.png')} />
        <Text style={{ top: '5%', color: '#978373', fontSize: 18 }}>Vital monitoring device</Text>
        <Text style={{ top: '5%', padding: 10, margin: 10, color: '#e4ddd8' }}>If you have a vital monitoring device. please connext with this application.</Text>
        <Text style={{ top: '3%', padding: 10, margin: 10, color: '#978373' }}>Learn more about this device</Text>
        <TouchableOpacity style={{ marginTop: '5%', backgroundColor: 'trasparent', borderWidth: 0.8, borderRadius: 50, borderColor: '#a08f7f', width: '90%', height: 60, alignItems: 'center', justifyContent: 'center' }} onPress={onPress}>
          <Text style={{ color: '#a08f7f' }}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeVitalMonitorTap

const styles = StyleSheet.create({
  main: {
    height: '100%',
    padding: 5,
    margin: 5,

  },
})