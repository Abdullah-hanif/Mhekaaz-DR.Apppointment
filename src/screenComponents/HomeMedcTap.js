import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const HomeMedcTap = () => {
  return (
    <View style={styles.main}>
      <ScrollView style={{ flex: 1 }}>
        {/* headingView */}
        <View>
          <Text style={styles.timeHeading}>Morning</Text>
        </View>

        {/* morningSectionView */}
        <View style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' }}>40mg |</Text> <Text style={{ fontWeight: '600' }}> Before meal </Text></Text>
              <Text style={{ color: '#a59384' }}>10:30 am</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#86705d', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#dacfc3' }}>Taken</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' }}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#a59384' }}>11:0  0 am</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461' }}>1</Text>
            <Text style={{ color: '#bcada0' }}>Dose</Text>
          </View>
        </View>

        {/* headingView */}
        <View>
          <Text style={styles.timeHeading}>After noon</Text>
        </View>
        {/* eveningSection */}
        <View style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' }}>40mg |</Text> <Text style={{ fontWeight: '600' }}> Before meal </Text></Text>
              <Text style={{ color: '#a59384' }}>10:30 am</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#86705d', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#dacfc3' }}>Taken</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' }}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#a59384' }}>11:0  0 am</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461' }}>1</Text>
            <Text style={{ color: '#bcada0' }}>Dose</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeMedcTap

const styles = StyleSheet.create({
  main: {
    height: '100%',
    padding: 5,
    margin: 5,

  },
  timeHeading: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '600'
  }
})