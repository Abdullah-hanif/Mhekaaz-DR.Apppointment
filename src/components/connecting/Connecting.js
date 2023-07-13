import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GlobalHeader from '../globalHeader/GlobalHeader'
import { AntDesign } from '@expo/vector-icons'

const Connecting = ({ navigation }) => {

    useEffect(() => {
        // Start the timeout when the component mounts
        const id = setTimeout(() => {
            navigation.navigate('PersonalInformation');
        }, 2000);

        // Clean up the timeout when the component unmounts
        return () => clearTimeout(id);
    }, [navigation]);
    const HalfLineLoader = () => {
        return (
            <View style={styles.loader}>
                <View style={styles.line} />
            </View>
        );
    };
    return (
        <View style={styles.main}>
            <GlobalHeader LIcon={<AntDesign name="left" size={24} color="black" />}
                text={' '}
                onPress={() => navigation.goBack()}
            />
            <View style={{ marginTop: '80%', alignItems: 'center' }}>
                <HalfLineLoader />
                <Text style={{ marginTop: 20, color: '#ffff', fontSize: 18, fontWeight: '600' }}>Connecting...</Text>
            </View>
        </View>
    )
}

export default Connecting

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#86705d',
        flex: 1
    },
    loader: {
        width: '70%',
        height: 8,
        backgroundColor: '#FFFF',
        alignSelf: 'center'
    },
    line: {
        height: '100%',
        width: '50%',
        backgroundColor: '#afa397',
    },
})