import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'


const TermAndCond = ({ navigation }) => {
    const mainHead = 'Connect gyroscope device';
    const subHead = 'Please Connect gyroscope device with this application, you will get the notification alert whenever fall detection occurs.'
    const qouteText = 'Learn more about device';
    return (
        <View style={styles.main}>

            <GlobalHeader
                LIcon={<AntDesign name="left" size={24} color="black" />}
                text={'Terms and Services'}
                onPress={() => navigation.goBack()}
            />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,

                }}
            />
            <View style={{ padding: 5, margin: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Terms</Text>
                <Text style={{ color: 'grey', textAlign: 'left', padding: 5 }}>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes.</Text>
            </View>
            <View style={{ padding: 5, margin: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Conditions </Text>
                <Text style={{ color: 'grey', textAlign: 'left', padding: 5, }}>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes.</Text>
            </View>
        </View>
    )
}

export default TermAndCond

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        backgroundColor: '#fffcf9',
        flex: 1
    },

})