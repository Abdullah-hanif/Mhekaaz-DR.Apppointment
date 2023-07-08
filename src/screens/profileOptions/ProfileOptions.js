import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign, FontAwesome, SimpleLineIcons, MaterialIcons, Ionicons, Foundation } from '@expo/vector-icons'

const ProfileOptions = ({navigation}) => {
    return (
        <View style={styles.main}>
            <GlobalHeader
                LIcon={<AntDesign name="left" size={24} color="black" />}
                Icon={<FontAwesome name="bell-o" size={24} color="black" />}
                text={' '}
                onPress={()=>navigation.goBack()}
            />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assests/images/UserImg.jpg')} style={{ width: 130, height: 130, borderRadius: 360 }} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Akif khan</Text>
                    <Text style={{ color: '#c2c3c6' }}>Akif akif.abdullah.aa32@gmail.com</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10, }}>
                    <View style={{ elevation: 2, alignItems: 'center', backgroundColor: '#efe7de', height: 65, width: '90%', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontWeight: 'bold' }}>Fall Detection</Text>
                        <FontAwesome name="long-arrow-right" size={24} color="black" />
                        <TouchableOpacity style={{ elevation: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#86705d', width: 100, height: 30, borderRadius: 10 }} onPress={()=>(navigation.navigate('FallDetection'))}>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>Connect</Text>
                        </TouchableOpacity>
                        <AntDesign name="mobile1" size={28} color="black" />
                    </View  >
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SimpleLineIcons name="user" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Account information</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={()=>navigation.navigate('SavedLocations')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name="profile" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Saved locations</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={()=>(navigation.navigate('Notifications'))}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="bell-o" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Notification</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="privacy-tip" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Privacy & Policy</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={()=>navigation.navigate('TermAndCond')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="warning-outline" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Terms & Conditions</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Foundation name="share" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Share App</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="highlight-remove" size={24} color="black" />
                            <Text style={{ left: 10, fontWeight: '600' }}>Delete account</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{elevation:2, left: 12, margin: 5, backgroundColor: '#86705d', width: 130, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ProfileOptions

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        flex: 1,
        backgroundColor: '#fffcf9'
    }
})