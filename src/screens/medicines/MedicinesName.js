import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../components/globalHeader/GlobalHeader'
import { Ionicons } from '@expo/vector-icons';
import { DayNameSelectionHeader } from '../../components/daysSelectionHeader/DaysSelectionHeader';
import { ScrollView } from 'react-native';
import UnitSelectText from '../../components/unitSelectText/UnitSelectText';

const MedicinesName = ({ navigation }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const days = [
        {
            id: 1,
            day: 'Monday',

        },
        {
            id: 2,
            day: 'Tuesday',

        },

        {
            id: 3,
            day: 'Wednesday'
        },
        {
            id: 4,
            day: 'Thursday',
        },
        {
            id: 5,
            day: 'Friiday',

        },
        {
            id: 6,
            day: 'Saturday',
        },
        {
            id: 7,
            day: 'Sunday',

        },
    ]
    const handleCategoryPress = (categoryId) => {
        setSelectedCategoryId(categoryId);
    };
    return (
        <View style={styles.main}>
            <ScrollView >
                <View style={{ margin: 6, padding: 6, height: '100%' }}>
                    <GlobalHeader
                        LIcon={<Ionicons name="chevron-back-outline" size={24} color="black" />}
                        text={'Medicine name'}
                        onPress={() => (navigation.goBack())}
                    />
                    <View style={{ backgroundColor: '#efe7de', width: '100%', height: 130, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assests/images/Medicine.png')} style={{ width: 160, height: 110 }} />
                    </View>
                    {/* days selection view */}

                    <View style={{ marginTop: '5%', height: 55 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {days.map((day) => (
                                <DayNameSelectionHeader
                                    onPress={handleCategoryPress}
                                    key={day.id}
                                    day={day}
                                />
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{ padding: 5, margin: 5 }}>
                        <Text style={{ fontWeight: '600', fontSize: 18 }}>About</Text>
                        <Text style={{ padding: 2, margin: 2, color: 'grey' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia</Text>
                    </View>

                    {/* botto, selection heading */}
                    <View style={{ padding: 0, margin: 0, marginBottom: 10 }}>
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Weight'}
                                itemNameFisrt={'100mg'}
                                itemHeadingSecond={'Type'}
                                itemNameSecond={'Tablet'}
                            />
                        </View>
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Time period'}
                                itemNameFisrt={'2 weeks'}
                                itemHeadingSecond={'Notify'}
                                itemNameSecond={'At every medicines'}
                            />
                        </View>
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Time Slots'}
                                itemNameFisrt={'Evening'}
                                itemHeadingSecond={false}
                                itemNameSecond={'Morning'}
                            />
                        </View>
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Quantity'}
                                itemNameFisrt={'2'}
                                itemHeadingSecond={false}
                                itemNameSecond={'Before meal'}
                            />
                        </View>
                        <View>
                            <UnitSelectText
                                itemHeadingFirst={'Reminders'}
                                itemNameFisrt={'9:00 am'}
                                itemHeadingSecond={false}
                                itemNameSecond={'Morning'}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MedicinesName

const styles = StyleSheet.create({
    main: {
        padding: 5,
        margin: 5,
        flex: 1,
        backgroundColor: '#FFFF'
    }
})