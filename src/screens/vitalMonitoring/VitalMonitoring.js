import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import { CustomDropDown } from '../../components/customDropdown/CustomDropDown';


const VitalMonitoring = ({ navigation }) => {

  return (
    <View style={styles.main}>

      <GlobalHeader
        LIcon={<AntDesign name="calendar" size={24} color="black" />}
        text={'Appointments'}
        Icon={<FontAwesome name="bell-o" size={24} color="black" />}
      />

      {/* boxes tap */}
      <View style={{ top: '3%', padding: 3, margin: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringBodyTem'))}>
            <FontAwesome name="thermometer-3" size={24} color="black" />
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Body Tempreture</Text>
            <Text style={{ color: '#baaa9c', fontSize: 18, fontWeight: 'bold' }}>9.93</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBox} onPress={() => (navigation.navigate('VitalMonitoringPulseRate'))}>
            <Ionicons name="pulse" size={24} color="black" />
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Pulse Rate</Text>
            <Text style={{ color: '#baaa9c', fontSize: 18, fontWeight: 'bold' }}>34.5</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.cardBox}>
            <MaterialCommunityIcons name="lungs" size={24} color="black" />
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Respiratory Rate</Text>
            <Text style={{ color: '#baaa9c', fontSize: 18, fontWeight: 'bold' }}>9.93</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBox}>
            <MaterialCommunityIcons name="blood-bag" size={24} color="black" />
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Blood Pressure</Text>
            <Text style={{ color: '#baaa9c', fontSize: 18, fontWeight: 'bold' }}>9.93</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: '100%', top: '10%' }}>
          <Text style={{ left: '3%', fontWeight: 'bold', fontSize: 18 }}>Monitoring</Text>
          <View style={{ backgroundColor: '#f8f4f1', top: 5, height: 60, width: '90%', alignSelf: 'center', justifyContent: "center", borderRadius: 360, padding: 20, flexDirection: 'row' }}>
            <CustomDropDown />
            <AntDesign name="down" size={18} color="black" />
          </View>
        </View>
      </View>


    </View>
  )
}

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