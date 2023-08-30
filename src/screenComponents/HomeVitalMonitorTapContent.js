import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

const HomeVitalMonitorTapContent = ({ currentRouteName }) => {
  // const route = useRoute()
  // const routeName = route.name;

  return (
    <View style={styles.main}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.cardBox}>
          <Image source={require('../assests/icons/temperature.png')} style={{ width: 12, height: 32 }} />
          <Text style={{ fontWeight: '500', fontSize: 16, textAlign: 'center' }}>Body Tempreture</Text>
          <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardBox}>
          <Image source={require('../assests/icons/pulse.png')} style={{ width: 37, height: 32 }} />
          <Text style={{ fontWeight: '500', fontSize: 16, }}>Pulse Rate</Text>
          <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>34.5</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.cardBox}>
          <Image source={require('../assests/icons/Chest.png')} style={{ width: 45, height: 32 }} />
          <Text style={{ fontWeight: '500', fontSize: 16, }}>Respiratory Rate</Text>
          <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardBox}>
          <Image source={require('../assests/icons/blood_pressure.png')} style={{ width: 32, height: 32 }} />
            <Text style={{ fontWeight: '500', fontSize: 16, }}>Blood Pressure</Text>
          <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeVitalMonitorTapContent

const styles = StyleSheet.create({

  main: {
    height: '100%',
    padding: 5,
    margin: 5,

  },
  cardBox: {
    padding: 5,
    margin: 5,
    width: '47%',
    height: 125,
    backgroundColor: '#efe7de',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})