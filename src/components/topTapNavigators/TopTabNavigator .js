import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';



const TopTabNavigator = ({ firstView, secondView, thirdView, firstTap = false, secondTap = false, thirdTap = false, TabOneName, TabTwoName, TabThreeName }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <><View style={styles.container}>
            {firstTap && <TouchableOpacity
                style={[
                    styles.tab,
                    activeTab === 0 && styles.activeTab,
                ]}
                onPress={() => handleTabPress(0)}
            >
                <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>{TabOneName || 'Tab 1'}</Text>
            </TouchableOpacity>}
            {secondTap && <TouchableOpacity
                style={[
                    styles.tab,
                    activeTab === 1 && styles.activeTab,
                ]}
                onPress={() => handleTabPress(1)}
            >
                <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>{TabTwoName || 'Tab 2'}</Text>
            </TouchableOpacity>}
            {thirdTap && <TouchableOpacity
                style={[
                    styles.tab,
                    activeTab === 2 && styles.activeTab,
                ]}
                onPress={() => handleTabPress(2)}
            >
                <Text style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>{TabThreeName || 'Tab 3'}</Text>
            </TouchableOpacity>}

        </View><>
                <ScrollView style={{ width: '100%', height: '100%' }}>
                    {activeTab === 0 && <View style={{ flex: 1 }}>{firstView}</View>}
                    {activeTab === 1 && <View>{secondView}</View>}
                    {activeTab === 2 && <View>{thirdView}</View>}
                </ScrollView>
            </></>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 0.7,
        borderTopWidth: 0.7,
        borderBottomColor: '#d3d3d3',
        borderTopColor: '#d3d3d3'
        // backgroundColor: '#f2f2f2',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#86705d',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d3d3d3',
        height: 40,
        textAlignVertical: 'center',
        textAlign:'center'
    },
    activeTabText: {
        color: 'black',
        height: 40,

        textAlignVertical: 'center'
    },
});

export default TopTabNavigator;
