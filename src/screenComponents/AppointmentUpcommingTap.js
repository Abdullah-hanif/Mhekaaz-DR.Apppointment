
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppointmentUpcommingTap = () => {
  const appoimentData = [
    {
      id: 1,
      activityHeading: 'Monthly activity',
      doctorName: 'Doctor name',
      clinicName: 'Clinic name',
      clinicArea: 'Clinic area address',
      virtual: '12 Feb, 2023 - 8:30pm',

      meetingIcon: require('../assests/icons/MeetingSchedule.png')
    },
    {
      id: 2,
      activityHeading: 'Monthly activity',
      doctorName: 'Doctor name',
      clinicName: 'Clinic name',
      clinicArea: 'Clinic area address',
      virtual: "14 Feb, 2023 - 5:30pm",
      meetingIcon: require('../assests/icons/MeetingSchedule.png')
    },
  ]


  const renderedItems = appoimentData.map((item) => (
    <TouchableOpacity style={styles.mainCardBox} key={item.id}>
      <View style={{ flexDirection: 'row', left: 20, alignItems: 'center' }}>
        <Image source={item.meetingIcon} style={{ width: 100, height: 90, borderRadius: 5 }} />
        <View style={{ left: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>{item.activityHeading}</Text>
          <Text style={{ color: '#9b8878', fontWeight: '600' }}>{item.doctorName} {item.clinicName}</Text>
          <Text style={{ color: '#bbaea2' }}>{item.clinicArea}</Text>
        </View>

      </View>
      <View style={styles.mainCardBoxBottom}>
        <View style={{ flexDirection: 'row', left: 10 }}>
        <Image source={require('../assests/icons/presention-chart.png')} style={{width:24,height:24}}/>
          <Text style={{ left: 20, color: '#917d6a', fontWeight: '600', fontSize: 16 }}>{item.virtual}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.main}>

      <View>{renderedItems}</View>
    </View>
  )
}

export default AppointmentUpcommingTap

const styles = StyleSheet.create({

  main: {
    height: '100%',
    padding: 5,
    margin: 5,

  },
  mainCardBox: {
    backgroundColor: '#fffcf9',
    width: '95%',
    height: 150,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    alignSelf: 'center',
    margin: 10,
    padding: 0,
    flexDirection: 'column'
  },
  mainCardBoxBottom: {
    backgroundColor: '#efe7de',
    height: '35%',
    width: '100%',
    margin: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  }
})