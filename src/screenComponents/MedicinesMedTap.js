import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const MedicinesMedTap = ({navigation,onPress}) => {
  return (
    <View style={styles.main}>
      <ScrollView style={{ flex: 1 }}>
     

        {/* morningSectionView */}
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }} onPress={onPress}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{fontWeight:'500',fontSize:14}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' ,fontWeight:'300',fontSize:14}}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#86705d' ,fontWeight:'600',fontSize:14}}>Morning-Afternoon-Night</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461',fontSize:20,fontWeight:'600' }}>1</Text>
            <Text style={{ color: '#bcada0',fontWeight:'300',fontSize:14 }}>Tablet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{fontWeight:'500',fontSize:14}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' ,fontWeight:'300',fontSize:14}}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#86705d' ,fontWeight:'600',fontSize:14}}>Morning-Afternoon-Night</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461',fontSize:20,fontWeight:'600' }}>1</Text>
            <Text style={{ color: '#bcada0',fontWeight:'300',fontSize:14 }}>Tablet</Text>
          </View>
        </TouchableOpacity>
      

     
     
        {/* eveningSection */}
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{fontWeight:'500',fontSize:14}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' ,fontWeight:'300',fontSize:14}}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#86705d' ,fontWeight:'600',fontSize:14}}>Morning-Afternoon-Night</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461',fontSize:20,fontWeight:'600' }}>1</Text>
            <Text style={{ color: '#bcada0',fontWeight:'300',fontSize:14 }}>Tablet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{}}>
            <Image source={require('../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
          </View>
          <View>
            <Text style={{fontWeight:'500',fontSize:14}}>Medicine name</Text>
            <View>
              <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' ,fontWeight:'300',fontSize:14}}>40mg |</Text> <Text style={{ fontWeight: '600' }}> After meal </Text></Text>
              <Text style={{ color: '#86705d' ,fontWeight:'600',fontSize:14}}>Morning-Afternoon-Night</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#efe7de', height: 60, width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#897461',fontSize:20,fontWeight:'600' }}>1</Text>
            <Text style={{ color: '#bcada0',fontWeight:'300',fontSize:14 }}>Tablet</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

export default MedicinesMedTap

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