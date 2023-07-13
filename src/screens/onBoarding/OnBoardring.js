import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const OnBoardring = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const goToNextScreen = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const renderScreen = (index) => {

    switch (index) {
      case 0:
        return (
          <View style={styles.screenContainer}>

            <Image source={require('../../assests/icons/OnboardingOne.png')} style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5, color: '#927e6d' }}>Need a caretaker ?</Text>
            <Text style={{ padding: 5, margin: 5, textAlign: 'left', color: '#9e9d9b' }}>Eu tempor dolor elit cupidatat do nostrud ad nulla ipsum minim laboris. Veniam esse irure nulla labore anim mollit. Exercitation cillum officia occaecat ex Lorem minid reprehenderit.</Text>

          </View>
        );
      case 1:
        return (
          <View style={styles.screenContainer}>

            <Image source={require('../../assests/icons/OnboardingTwo.png')} style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5, color: '#927e6d' }}>Vital monitoring</Text>
            <Text style={{ padding: 5, margin: 5, textAlign: 'left', color: '#9e9d9b' }}>Eu tempor dolor elit cupidatat do nostrud ad nulla ipsum minim laboris. Veniam esse irure nulla labore anim mollit. Exercitation cillum officia occaecat ex Lorem minid reprehenderit.</Text>

          </View>
        );
      case 2:
        return (
          <View style={styles.screenContainer}>

            <Image source={require('../../assests/icons/OnboardingThree.png')} style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5, color: '#927e6d' }}>Location tracking </Text>
            <Text style={{ padding: 5, margin: 5, textAlign: 'left', color: '#9e9d9b' }}>Eu tempor dolor elit cupidatat do nostrud ad nulla ipsum minim laboris. Veniam esse irure nulla labore anim mollit. Exercitation cillum officia occaecat ex Lorem minid reprehenderit.</Text>

          </View>
        );
      case 3:
        return (
          <View style={styles.screenContainer}>

            <Image source={require('../../assests/icons/OnboardingFour.png')} style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5, color: '#927e6d' }}>Medicine record</Text>
            <Text style={{ padding: 5, margin: 5, textAlign: 'left', color: '#9e9d9b' }}>Eu tempor dolor elit cupidatat do nostrud ad nulla ipsum minim laboris. Veniam esse irure nulla labore anim mollit. Exercitation cillum officia occaecat ex Lorem minid reprehenderit.</Text>

          </View>
        );
      case 4:
        return (
          <View style={styles.screenContainer}>

            <Image source={require('../../assests/icons/OnboardingFive.png')} style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 5, margin: 5, color: '#927e6d' }}>Scheduled appointments</Text>
            <Text style={{ padding: 5, margin: 5, textAlign: 'left', color: '#9e9d9b' }}>Eu tempor dolor elit cupidatat do nostrud ad nulla ipsum minim laboris. Veniam esse irure nulla labore anim mollit. Exercitation cillum officia occaecat ex Lorem minid reprehenderit.</Text>

          </View>
        );

      default:
        return null;
    }
  };

  const renderDots = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, margin: 8, alignItems: 'center', marginTop: '20%', }}>
        <View style={styles.dotsContainer}>
          {[0, 1, 2, 3, 4].map((index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentScreen ? styles.activeDot : null,
              ]}
            />
          ))}

        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={currentScreen == 4 ? () => (navigation.navigate('AuthLogin')) : goToNextScreen}>
            <AntDesign name="arrowright" size={28} color="white" />
          </TouchableOpacity>


        </View>
      </View>

    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-end', right: 15, top: 5 }} onPress={() => (navigation.navigate('AuthLogin'))}>
        <Text style={{ fontWeight: '600', fontSize: 14 }}>Skip</Text>
      </TouchableOpacity>
      <View style={{ marginTop: '15%' }}>
        {renderScreen(currentScreen)}
        {renderDots()}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fffcf9'
  },
  screenContainer: {
    height: '70%',
    justifyContent: 'center',

    padding: 5,
    margin: 5,
    backgroundColor: '#fffcf9'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#86705d',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  dotsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 20,


  },
  dot: {
    width: 25,
    height: 6,
    borderRadius: 1,
    backgroundColor: '#d3d4d4',
    marginHorizontal: 4,

  },
  activeDot: {
    backgroundColor: '#86705d',
  },
});

export default OnBoardring;
