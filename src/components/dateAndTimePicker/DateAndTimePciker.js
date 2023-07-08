import React, { useState } from 'react';
import { View, Button, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from 'react-native';


const DateAndTimePciker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const hideDateTimePicker = () => {
    setShowPicker(false);
  };

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
    }
    hideDateTimePicker();
  };

  return (
    <View style={styles.container}>
      {/* <Button title="Select Date" onPress={showDateTimePicker}  /> */}
      <TouchableOpacity onPress={showDateTimePicker} style={{left:10,justifyContent:'center'}}>
        <Text style={{color:'grey',textAlignVertical:'center'}}>{ selectedDate.toDateString() || 'Select date'}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      {/* <View style={styles.selectedDateContainer}>
        <Button
          title={`Selected Date: ${selectedDate.toDateString()}`}
          onPress={() => {}}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateContainer: {
    marginTop: 20,
  },
});


export default DateAndTimePciker

