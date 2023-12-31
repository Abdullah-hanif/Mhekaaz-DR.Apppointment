import { Modal, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { AntDesign, FontAwesome, SimpleLineIcons, MaterialIcons, Ionicons, Foundation } from '@expo/vector-icons'


const AlertModal = ({ visible, message, onCancel, onOK }) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onOK} style={{ elevation: 2, left: 0, margin: 5, backgroundColor: '#86705d', width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                            <Text style={{ color: 'white', fontWeight: '600' }}>Delete</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onCancel} style={{ elevation: 2, left: 0, margin: 5, backgroundColor: '#efe7de', width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                            <Text style={{ color: '#d8ccc0', fontWeight: '600' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const ProfileOptions = ({ navigation }) => {


    const [modalVisible, setModalVisible] = useState(false);

    const handleDeleteAccount = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
        console.log('Account deletion canceled.');
    };

    const handleOK = () => {
        setModalVisible(false);
        console.log('Account deleted successfully!');
    };
    return (
        <View style={styles.main}>
            <GlobalHeader
                LIcon={<AntDesign name="left" size={24} color="black" />}
                Icon={<Image source={require('../../assests/icons/notification.png')} style={{width:32,height:32}}/>}
                text={' '}
                onPress={() => navigation.goBack()}
            />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assests/images/UserImg.jpg')} style={{ width: 130, height: 130, borderRadius: 360 }} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Akif khan</Text>
                    <Text style={{ color: '#c2c3c6' }}>akif.abdullah.aa32@gmail.com</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10, }}>
                    <View style={{ elevation: 2, alignItems: 'center', backgroundColor: '#efe7de', height: 65, width: '90%', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontWeight: 'bold' }}>Fall Detection</Text>
                        <FontAwesome name="long-arrow-right" size={24} color="black" />
                        <TouchableOpacity style={{ elevation: 3, alignItems: 'center', justifyContent: 'center', backgroundColor: '#86705d', width: 100, height: 30, borderRadius: 10 }} onPress={() => (navigation.navigate('FallDetection'))}>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 14 }}>Connect</Text>
                        </TouchableOpacity>
                        <Image source={require('../../assests/icons/gyroscope.png')} style={{width:30,height:48}}/>
                    </View  >
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/user-edit.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16 }}>Account information</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={() => navigation.navigate('SavedLocations')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/map.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>locations</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={() => (navigation.navigate('Notifications'))}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/notification-bing.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>Notification</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/security-safe.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>Privacy & Policy</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }} onPress={() => navigation.navigate('TermAndCond')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/warning-2.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>Terms & Conditions</Text>
                        </View>
                        <AntDesign name="right" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/share.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>Share App</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDeleteAccount} style={{ padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', elevation: 2, backgroundColor: '#f9f4ee', height: 65, width: '90%', borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assests/icons/delete-account.png')} style={{width:24,height:24}}/>
                            <Text style={{ left: 10, fontWeight: '500',fontSize:16}}>Delete account</Text>
                        </View>
                    </TouchableOpacity>


                    <AlertModal
                        visible={modalVisible}
                        message="Do you want to delete this account?"
                        onCancel={handleCancel}
                        onOK={handleOK}
                    />

                </View>
                <TouchableOpacity style={{ elevation: 2, left: 12, margin: 5, backgroundColor: '#86705d', width: 130, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
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
    },
    button: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%'
    },
    message: {
        fontSize: 16,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    okButton: {
        backgroundColor: 'green'
    },
    okButtonText: {
        fontSize: 16
    }
})