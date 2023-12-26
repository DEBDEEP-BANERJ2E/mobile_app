import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AppHeader = () => {
  const handleMenuPress = () => {
    console.log('Menu Pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile Icon Pressed');
  };
  
  const handleEmergencyPress = () => {
    console.log('Emergency Pressed');
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SANKAT</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleProfilePress}>
            <Image
              source={require('../my-new-project2/assets/profile.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuPress}>
            <Image
              source={require('../my-new-project2/assets/menu.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerBar} />

      <View style={{paddingTop: 60}}>
        <Text style={styles.textInput}>Click on the emergency button below for immediate help!</Text>
          <View style={{paddingTop:20}}>
            <TouchableOpacity onPress={handleEmergencyPress}>
              <Image
                source={require('../my-new-project2/assets/Logo.png')}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.textInput}>Emergency services are a vital component of public safety, providing rapid and coordinated responses to a wide range of emergencies to protect lives, property, and communities.</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 40,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  headerBar: {
    height: 3,
    backgroundColor: 'black', // You can adjust the color
    marginHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    padding: 200,
  },
  headerTitle: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    alignContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 90,
    paddingTop: 6,
    paddingLeft: 85,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  textInput: {
    paddingLeft: 28,
    paddingRight: 28,
    alignItems:'center',
    fontSize: 20,
    color: 'black',
  }
});

export default AppHeader;
