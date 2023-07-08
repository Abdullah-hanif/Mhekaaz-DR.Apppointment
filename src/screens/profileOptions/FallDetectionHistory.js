import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Platform, ScrollView, StyleSheet, View } from 'react-native';
import GlobalHeader from '../../components/globalHeader/GlobalHeader';
import PieChartComponent from '../../components/pieChart/PieChartComponent';
import { Text } from 'react-native';
import HorizontalLine from '../../components/horizontalLine/HorizontalLine';
import { CustomDropDown } from '../../components/customDropdown/CustomDropDown';

const FallDetectionHistory = ({ navigation }) => {
    const tableData = [
        { id: 1, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23' },
        { id: 2,column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23' },
        { id: 3, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23'  },
        { id: 4, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23'  },
        { id: 5, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23'  },
        { id: 6, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23'  },
        { id: 7, column1: 'http:/Google/maps/pmgsajdfj189', column2: '12-3-23'  },
        // Add more rows as needed
    ];
    const renderItem = ({ item }) => (
        <View style={{elevation:2,borderWidth:1,borderColor:'#eae4e0', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fffcf9', height: 50, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f7f4f1' }}>
            <Text style={{color:'#9b8878',fontWeight:'400',width:'40%',textAlign:'left'}}>{item.column1}</Text>
            <Text style={{ fontSize: 45, color: '#e9e4e0', fontWeight: '100' }}>|</Text>
            <Text style={{color:'#c1b3a9'}}>{item.column2}</Text>
        </View>

    );
    return (
        <View style={styles.main}>
            <GlobalHeader
                LIcon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
                text={'Fall detection'}
                Icon={false}
                onPress={() => (navigation.goBack())}
            />
          
            <View style={{ padding: 5, margin: 5, flex: 1 }}>
              
                <View style={{  top:5,padding:0,margin:5, width: '100%', height:'100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#d3cbc4', height: 60, alignItems: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                        <Text style={{ color: "#917d6c", fontSize: 18, fontWeight: '600' }}>Location</Text>
                        <Text style={{ color: "#917d6c", fontSize: 18, fontWeight: '600' }}>Date</Text>
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

export default FallDetectionHistory

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