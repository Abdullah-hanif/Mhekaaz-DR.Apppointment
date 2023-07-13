import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import PieChartComponent from '../../components/pieChart/PieChartComponent';

const VitalMonitoringRespiratory = ({ navigation }) => {
  const tableData = [
    { id: 1, column1: 'Dat 1', column2: 'Value 1' },
    { id: 2, column1: 'Day 2', column2: 'Value 2' },
    { id: 3, column1: 'Day 3', column2: 'Value 3' },
    { id: 4, column1: 'Day 4', column2: 'Value 3' },
    { id: 5, column1: 'Day 5', column2: 'Value 3' },
    { id: 6, column1: 'Day 6', column2: 'Value 3' },
    { id: 7, column1: 'Day 7', column2: 'Value 3' },
    // Add more rows as needed
  ];

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fffcf9', height: 60, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f7f4f1' }}>
      <Text style={{ color: '#9b8878', fontWeight: 'bold' }}>{item.column1}</Text>
      <Text style={{ fontSize: 45, color: '#e9e4e0', fontWeight: '100' }}>|</Text>
      <Text style={{ color: '#c1b3a9' }}>{item.column2}</Text>
    </View>

  );
  return (
    <View style={styles.main}>
      <GlobalHeader
        LIcon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
        text={'Repiratory Rate'}
        Icon={false}
        onPress={() => (navigation.goBack())}
      />
      <View style={styles.box}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', left: 5 }}>Repiratory rate<Text style={{ fontWeight: '400' }}>(By age)</Text></Text>
        <View
          style={{
            borderBottomColor: 'grey',
            borderBottomWidth: StyleSheet.hairlineWidth,
            top: 8
          }}
        />
        <View style={{ flexDirection: 'row',  padding: 10, margin: 5 }}>
          <View style={{ padding: 3, margin: 3 }}>
            <View ><Text style={{ fontWeight: '600'}}>Age</Text></View>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#86705d', borderRadius: 20 }}></View> 6 weeks</Text>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#d8b598', borderRadius: 20 }}></View> 5 months</Text>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#f5e1d0', borderRadius: 20 }}></View> 1-3 years</Text>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#e5c7ad', borderRadius: 20 }}></View> 6-20 years</Text>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#e5c7ad', borderRadius: 20 }}></View> 6-20 years</Text>
            <Text style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}><View style={{ height: 7, width: 7, backgroundColor: '#e5c7ad', borderRadius: 20 }}></View> Adults </Text>

          </View>
          <View style={{ padding: 3, margin: 3 ,left:20 ,alignItems:'center'}}>
            <View><Text style={{ fontWeight: '600' }}>Repiratory Rate</Text></View>
            <Text style={{ color: '#c4b8ad' }}>49-61</Text>
            <Text style={{ color: '#c4b8ad' }}>50-61</Text>
            <Text style={{ color: '#c4b8ad' }}>52-67</Text>
            <Text style={{ color: '#c4b8ad' }}>52-67</Text>
            <Text style={{ color: '#c4b8ad' }}>52-67</Text>
            <Text style={{ color: '#c4b8ad' }}>12-20</Text>

          </View>
       
   

        </View>
      </View>
      <View style={{ padding: 5, margin: 5, flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Your values</Text>
        </View>
        <View style={{ elevation: 3, top: 5, padding: 0, margin: 5, width: '100%', borderRadius: 10, borderWidth: 1, height: '93%', borderColor: '#eae4e0' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#d3cbc4', height: 60, alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            <Text style={{ color: "#917d6c", fontSize: 18, fontWeight: '600' }}>Weekly</Text>
            <Text style={{ color: "#917d6c", fontSize: 18, fontWeight: '600' }}>Tempreture</Text>
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

export default VitalMonitoringRespiratory

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