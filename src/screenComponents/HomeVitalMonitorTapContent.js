import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const HomeVitalMonitorTapContent = ({currentRouteName}) => {
// const route = useRoute()
// const routeName = route.name;

  return (
    <View style={styles.main}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.cardBox}>
          <FontAwesome name="thermometer-3" size={24} color="black" />
          <Text style={{ fontWeight: '600', fontSize: 18 }}>Body Tempreture</Text>
          <Text style={{ color: '#baaa9c', fontSize: 18, fontWeight: 'bold' }}>9.93</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardBox}>
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