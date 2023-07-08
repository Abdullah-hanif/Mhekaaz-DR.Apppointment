import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const PieChartComponent = () => {
  const data = [
    { name: 'Normal', population: 98.9, color: '#86705d', legendFontColor: '#86705d', legendFontSize: 12 },
    { name: 'Low', population: 95, color: '#d8b598', legendFontColor: '#d8b598', legendFontSize: 12 },
    { name: 'Too low', population: 95.0, color: '#f5e1d0', legendFontColor: '#f5e1d0', legendFontSize: 12 },
    { name: 'High', population: 103, color: '#fdefe4', legendFontColor: '#fdefe4', legendFontSize: 12 },
    { name: 'Too high', population: 104, color: '#e5c7ad', legendFontColor: '#e5c7ad', legendFontSize: 12 },
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  )
}

export default PieChartComponent

const styles = StyleSheet.create({})