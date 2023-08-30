import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import { CustomDropDown } from '../../components/customDropdown/CustomDropDown';
import { Image } from 'react-native';


const VitalMonitoring = ({ navigation }) => {

  return (
    <View style={styles.main}>

      <GlobalHeader
        LIcon={<Image source={require('../../assests/icons/calendar.png')} style={{ width: 32, height: 32 }} />}
        text={'Appointments'}
        Icon={<Image source={require('../../assests/icons/notification.png')} style={{ width: 32, height: 32 }} />}
      />

      {/* boxes tap */}
      <View style={{ top: '3%', padding: 3, margin: 3 }}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringBodyTem'))}>
            <Image source={require('../../assests/icons/temperature.png')} style={{ width: 12, height: 32 }} />
            <Text style={{ fontWeight: '500', fontSize: 16, textAlign: 'center' }}>Body Tempreture</Text>
            <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringPulseRate'))} >
            <Image source={require('../../assests/icons/pulse.png')} style={{ width: 37, height: 32 }} />
            <Text style={{ fontWeight: '500', fontSize: 16, }}>Pulse Rate</Text>
            <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>34.5</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringRespiratory'))}>
            <Image source={require('../../assests/icons/Chest.png')} style={{ width: 45, height: 32 }} />
            <Text style={{ fontWeight: '500', fontSize: 16, }}>Respiratory Rate</Text>
            <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringBloodPressure'))}>
            <Image source={require('../../assests/icons/blood_pressure.png')} style={{ width: 32, height: 32 }} />
            <Text style={{ fontWeight: '500', fontSize: 16, }}>Blood Pressure</Text>
            <Text style={{ color: '#86705D', fontSize: 24, fontWeight: '600' }}>9.93</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: '100%', top: '10%' }}>
        <Text style={{ left: '3%', fontWeight: 'bold', fontSize: 18 }}>Monitoring</Text>
        <View style={{ backgroundColor: '#f8f4f1', top: 5, height: 60, width: '90%', alignSelf: 'center', justifyContent: "center", borderRadius: 360, padding: 20, flexDirection: 'row' }}>
          <CustomDropDown />
          <AntDesign name="down" size={18} color="black" />
        </View>
      </View>
    </View>
  )
};

export default VitalMonitoring

const styles = StyleSheet.create({
  main: {
    padding: 5,
    margin: 5,
    flex: 1,
    backgroundColor: '#FFFF'
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