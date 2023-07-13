import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Platform, ScrollView, StyleSheet, View } from 'react-native';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import PieChartComponent from '../../components/pieChart/PieChartComponent';
import { Text } from 'react-native';
import HorizontalLine from '../../components/horizontalLine/HorizontalLine';
import { CustomDropDown } from '../../components/customDropdown/CustomDropDown';

const VitalMonitoringBloodPressure = ({ navigation }) => {
  const tableData = [
    { id: 1, column1: 'Dat 1', column2: '12', colum3: '89' },
    { id: 2, column1: 'Day 2', column2: '22', colum3: '89' },
    { id: 3, column1: 'Day 3', column2: '23', colum3: '89' },
    { id: 4, column1: 'Day 4', column2: '32', colum3: '89' },
    { id: 5, column1: 'Day 5', column2: '43', colum3: '89' },
    { id: 6, column1: 'Day 6', column2: '34', colum3: '89' },
    { id: 7, column1: 'Day 7', column2: '34', colum3: '89' },
    // Add more rows as needed
  ];
  const renderItem = ({ item }) => (
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#fffcf9', height: 60, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f7f4f1' }}>
      <Text style={{ color: '#9b8878', fontWeight: 'bold' }}>{item.column1}</Text>
      <Text style={{ fontSize: 45, color: '#e9e4e0', fontWeight: '100' }}>|</Text>
      <Text style={{ color: '#c1b3a9' }}>{item.column2}</Text>
      <Text style={{ fontSize: 45, color: '#e9e4e0', fontWeight: '100' }}>|</Text>
      <Text style={{ color: '#c1b3a9' }}>{item.colum3}</Text>
    </View>

  );
  return (
    <View style={styles.main}>
      <GlobalHeader
        LIcon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
        text={'Blood pressure'}
        Icon={false}
        onPress={() => (navigation.goBack())}
      />
      <View style={styles.box}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', left: 5 }}>Frequency</Text>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: StyleSheet.hairlineWidth,
            top: 8
          }}
        />
        <PieChartComponent />
      </View>
      <View style={{ padding: 5, margin: 5, flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your values</Text>
        </View>
        <View style={{ elevation: 3, top: 5, padding: 0, margin: 5, width: '100%', borderRadius: 10, borderWidth: 1, height: '93%', borderColor: '#eae4e0' }}>
          <View style={{ paddingLeft: 18, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#d3cbc4', height: 60, alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%' }}>
            <Text style={{ color: "#917d6c", fontSize: 14, fontWeight: '600' }}>Weekly</Text>
            <Text style={{ color: "#917d6c", fontSize: 14, fontWeight: '600' }}>Upper range</Text>
            <Text style={{ color: "#917d6c", fontSize: 14, fontWeight: '600' }}>Lower range</Text>
          </View>

          <FlatList
            data={tableData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={true}

          />

        </View>

      </View>
    </View>
  )
}

export default VitalMonitoringBloodPressure

const styles = StyleSheet.create({
  main: {
    padding: 5,
    margin: 5,
    flex: 1,
    backgroundColor: '#fffff'
  },
  box: {
    padding: 5,
    margin: 5,
    width: '95%',
    height: 250,
    backgroundColor: '#fffcf9',
    alignSelf: 'center',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  }
})