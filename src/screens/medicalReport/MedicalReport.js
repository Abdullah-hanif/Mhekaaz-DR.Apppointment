import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const MedicalReport = () => {

    const reportsData = [
        {
            id: 1,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
        {
            id: 2,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
        {
            id: 3,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
        {
            id: 4,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
        {
            id: 5,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
        {
            id: 6,
            cardHead: 'Monthly checkup',
            subHead: 'Diabetes',
            docName: 'Dr. Dianne Russel',
            Date: '12-04-2023'

        },
    ]
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{ elevation: 1, alignItems: 'center', backgroundColor: '#fcf8f3', height: 100, padding: 5, margin: 5, borderRadius: 10, flexDirection: 'row' }}>
            <View style={{ left: 15 }}>
                <Image source={require('../../assests/icons/MedIcon.png')} style={{ width: 60, height: 60, borderRadius: 5 }} />
            </View>
            <View style={{ left: 30 }}>
                <Text style={{ fontWeight: '600' }}>{item.cardHead}</Text>
                <View>
                    <Text style={{ color: '#a59384' }}><Text style={{ color: '#a59384' }}>{item.subHead} |</Text> <Text style={{ fontWeight: '600' }}> {item.docName} </Text></Text>
                    <Text style={{ color: '#a59384' }}>{item.Date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.main}>

            {/* global header */}
            <GlobalHeader
                LIcon={<Ionicons name="newspaper-outline" size={24} color="black" />}
                text={'Medical report'}
                Icon={<FontAwesome name="bell-o" size={24} color="black" />}
            />
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', top: 10 }}>
                <View style={{ backgroundColor: '#f8f4f1', flexDirection: 'row', width: '80%', height: 50, borderRadius: 25, alignItems: 'center', padding: 5 }}>
                    <Ionicons name="search-outline" size={24} color="#b7aa9d" style={{ left: 10 }} />
                    <TextInput placeholder='Search reports' placeholderTextColor={'#cec3ba'} style={{ left: 20 }} />

                </View>
                <TouchableOpacity style={{ backgroundColor: '#f4f1ee', height: 50, alignItems: 'center', width: '13%', justifyContent: 'center', borderRadius: 30 }}>
                    <FontAwesome5 name="calendar-alt" size={24} color="#b6a89c" />
                </TouchableOpacity>
            </View>
            <View style={{ top: 10, padding: 5, margin: 5 }}>
                {/* reports renders */}
                <FlatList
                    data={reportsData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

        </View>
    )
}

export default MedicalReport

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        backgroundColor: '#fffcf9',
        flex: 1
    },
    timeHeading: {
        color: 'grey',
        fontSize: 20,
        fontWeight: '600'
    }
})

