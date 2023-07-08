import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { Entypo, Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';

const SavedLocations = ({ navigation }) => {

    return (
        <View style={styles.main}>
            <View style={{ position: 'absolute', zIndex: 99999, left: 20, top: 20 }}>
                <TouchableOpacity onPress={() => (navigation.goBack())}>
                    <Ionicons name="ios-chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}

            />
            <View style={styles.button}>
                <TouchableOpacity style={{ height: 65, backgroundColor: "#343434", borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#efe7de', height: 45, width: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 5, elevation: 3 }}>
                            <Entypo name="home" size={35} color="#86705d" />
                        </View>
                        <View style={{ left: 10, justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Home</Text>
                            <Text style={{ color: '#b8b8b5' }}>9km . 1hr ago . radius 5km</Text>
                        </View>
                    </View>
                    <Ionicons name="paper-plane-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, height: 65, backgroundColor: "#343434", borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#efe7de', height: 45, width: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 5, elevation: 3 }}>

                            <FontAwesome name="plus-circle" size={35} color="#86705d" />
                        </View>
                        <View style={{ left: 10, justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Clinic</Text>
                            <Text style={{ color: '#b8b8b5' }}>9km . 1hr ago . radius 5km</Text>
                        </View>
                    </View>
                    <Ionicons name="paper-plane-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10, height: 65, backgroundColor: "#343434", borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#efe7de', height: 45, width: 45, alignItems: 'center', justifyContent: 'center', borderRadius: 5, elevation: 3 }}>
                            <Octicons name="feed-person" size={35} color="#86705d" />
                        </View>
                        <View style={{ left: 10, justifyContent: 'center' }}>
                            <Text style={styles.buttonText}>Relative</Text>
                            <Text style={{ color: '#b8b8b5' }}>9km . 1hr ago . radius 5km</Text>
                        </View>
                    </View>
                    <Ionicons name="paper-plane-outline" size={24} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SavedLocations

const styles = StyleSheet.create({
    main: {

        backgroundColor: '#ffff',
        flex: 1,
    },
    map: {
        flex: 1,
    },
    button: {
        position: 'absolute',
        width: '100%',
        height: 230,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 10,
        marginTop: '120%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})