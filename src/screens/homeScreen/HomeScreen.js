import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DaysSelectionHeader from '../../components/daysSelectionHeader/DaysSelectionHeader';
import HorizontalLine from '../../components/horizontalLine/HorizontalLine';
import TopTabNavigator from '../../components/topTapNavigators/TopTabNavigator ';
import HomeMedcTap from '../../screenComponents/HomeMedcTap';
import HomeVitalMonitorTap from '../../screenComponents/HomeVitalMonitorTap';
import HomeVitalMonitorTapContent from '../../screenComponents/HomeVitalMonitorTapContent';
import { useRoute } from '@react-navigation/native';
import HomeAppoimentsTap from '../../screenComponents/HomeAppoimentsTap';


const HomeScreen = ({ navigation }) => {
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
      {/* bell icon */}
      <TouchableOpacity style={styles.AlertBell} onPress={()=>(navigation.navigate('Medicines'))}>
        <MaterialIcons name="notifications-on" size={35} color="#fff" />
      </TouchableOpacity  >
      {/* global header */}
      <GlobalHeader
        Img={require('../../assests/images/UserImg.jpg')}
        text={'Akif khan'}
        Icon={<FontAwesome name="bell-o" size={24} color="black" />}
        onPress={()=>navigation.navigate('ProfileOptions')}
      />
      {/* days selection view */}

      <View style={{ marginTop: '5%', height: 120 }}>
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
          thirdTap={true}
          firstView={<HomeMedcTap />}
          secondView={<HomeVitalMonitorTapContent /> || <HomeVitalMonitorTap onPress={() => (navigation.navigate('HomeVitalMonitorTapContent'))} />}
          thirdView={<HomeAppoimentsTap />}
          TabOneName={'Medicines'}
          TabTwoName={'monitoring'}
          TabThreeName={'Appointments'}
        />

      </ScrollView>
    </View>
  )
}

export default HomeScreen

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