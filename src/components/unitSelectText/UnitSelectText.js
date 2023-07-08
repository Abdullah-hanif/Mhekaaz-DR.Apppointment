import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const UnitSelectText = ({ itemName, itemHeading ,itemHeadingFirst,itemNameFisrt,itemHeadingSecond,itemNameSecond}) => {
    return (
        <View style={{ padding: 5, margin: 5 }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 18 }}>{itemHeadingFirst ?? 'Item heading'}</Text>
                    <TouchableOpacity style={{top:5, padding: 5, margin: 5, backgroundColor: '#efe7de', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#b9aa9b', fontSize: 15, fontWeight: 'bold' }}>{itemNameFisrt ?? 'Item'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ left: 15 }}>
                    <Text style={{ fontWeight: '600', fontSize: 18 }}>{itemHeadingSecond ?? 'Item heading'}</Text>
                    <TouchableOpacity style={{ top:5,padding: 5, margin: 5, backgroundColor: '#efe7de', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                        <Text style={{ color: '#b9aa9b', fontSize: 15, fontWeight: 'bold' }}>{itemNameSecond ?? 'Item'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UnitSelectText

const styles = StyleSheet.create({})