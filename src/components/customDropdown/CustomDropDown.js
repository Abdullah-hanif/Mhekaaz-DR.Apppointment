import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

export const CustomDropDown = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        toggleDropdown();
    };

    const renderOption = ({ item }) => (
        <TouchableOpacity onPress={() => handleOptionSelect(item.value)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={toggleDropdown}>
                <Text style={{ color: 'grey' }}>{selectedValue ? selectedValue : 'Select a group'}</Text>
            </TouchableOpacity>
            {dropdownVisible && (
                <View style={{ marginTop: 10, height: 100, backgroundColor: 'white', borderWidth: 0.9, padding: 10, borderRadius: 10 }}>
                    <FlatList
                        data={options}
                        renderItem={renderOption}
                        keyExtractor={(item) => item.value}
                    />
                </View>
            )}
        </View>
    );
};

