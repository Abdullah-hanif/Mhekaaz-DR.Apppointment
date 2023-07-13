import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { Ionicons } from '@expo/vector-icons';
import { DayNameSelectionHeader } from '../../components/daysSelectionHeader/DaysSelectionHeader';
import { ScrollView } from 'react-native';
import UnitSelectText from '../../components/unitSelectText/UnitSelectText';
import { TouchableOpacity } from 'react-native';

const TestReports = ({ navigation }) => {


    return (
        <View style={styles.main}>
            <ScrollView >
                <View style={{ margin: 6, padding: 6, height: '100%' }}>
                    <GlobalHeader
                        LIcon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
                        text={'Test report'}
                        onPress={() => (navigation.goBack())}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center',elevation:2 }}>
                        <Image source={require('../../assests/images/UserImg.jpg')} style={{ width: 90, height: 90 ,borderRadius:10}} />
                        <View style={{ left: 20 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Dr akif</Text>
                            <Text style={{ color: '#b9aa9b' }}>Hospital: hospital name</Text>
                            <Text style={{ color: '#b9aa9b' }}>Case: Sugar</Text>
                        </View>
                    </View>

                    <View style={{ padding: 5, margin: 5 }}>
                        <Text style={{ fontWeight: '600', fontSize: 18 }}>About</Text>
                        <Text style={{ padding: 2, margin: 2, color: 'grey' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</Text>
                    </View>

                    {/* botto, selection heading */}
                    <View style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5 }}>Prescription</Text>
                            </View>
                            <View>
                                <Text style={{padding:5,margin:5    }}><Text style={{color:'#b9aa9b',fontSize:16,fontWeight:'600'}}>Medicine name</Text> <Text style={{fontSize:18,color:'#e8e3dd'}}> | </Text> <Text style={{fontSize:16,fontWeight:'600',color:'#e8e3dd'}}> 2 tablet lets before meal </Text></Text>
                            <View style={{flexDirection:"row"}}>
                                <TouchableOpacity style={{ marginTop:5, padding: 5, margin: 5, backgroundColor: '#efe7de', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: 80 }}>
                                    <Text style={{ color: '#b9aa9b', fontSize: 15, fontWeight: 'bold' }}>100mg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop:5, padding: 5, margin: 5, backgroundColor: '#efe7de', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: 80 }}>
                                    <Text style={{ color: '#b9aa9b', fontSize: 15, fontWeight: 'bold' }}>1 week</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginTop:5, padding: 5, margin: 5, backgroundColor: '#efe7de', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: 80 }}>
                                    <Text style={{ color: '#b9aa9b', fontSize: 15, fontWeight: 'bold' }}>two times</Text>
                                </TouchableOpacity>
                            </View>
                            </View>

                       
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Test name'}
                                itemNameFisrt={'type'}
                                itemHeadingSecond={false}
                                itemNameSecond={'purpose issue'}
                            />
                        </View>
                       <View style={{padding:5,margin:5,bottom:15}}>
                        <Text style={{fontSize:18,fontWeight:'600'}}>Add image</Text>
                        <Image source={require('../../assests/images/MedicalReport.png')} style={{width:80,height:70,top:10}}/>
                       </View>
                       <View style={{flexDirection:'row',justifyContent:'space-around',bottom:5}}>
                        <TouchableOpacity  style={{backgroundColor:'#86705d',width:'45%',height:45,alignItems:'center',justifyContent:'center',borderRadius:25}}>
                            <Text style={{color:'#f4f3f3'}}>Download</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{borderWidth:1,borderColor:'#bbada1',width:'45%',height:46,alignItems:'center',justifyContent:'center',borderRadius:25}}>
                            <Text style={{color:'#bbada1'}}>Preview</Text>
                        </TouchableOpacity>
                       </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default TestReports

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        flex: 1,
        backgroundColor: '#FFFF'
    }
})