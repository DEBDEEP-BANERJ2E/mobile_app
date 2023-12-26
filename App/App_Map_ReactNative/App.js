import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const AppHeader = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [agenciesList, setAgenciesList] = useState([
    { id: '1', name: 'Agency 1' },
    { id: '2', name: 'Agency 2' },
    { id: '3', name: 'Agency 3' },
    // Add more agencies as needed
  ]);

  const handleMenuPress = () => {
    console.log('Menu Pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile Icon Pressed');
  };

  const handleMapPress = () => {
    console.log('Map Pressed');
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  };

  const handleAgencyPress = (agency) => {
    console.log(`Agency Pressed: ${agency.name}`);
    // Perform actions on agency press if needed
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

      <View style={styles.latLong}>
        <TextInput
          style={styles.textInput}
          placeholder="Latitude X"
          value={latitude}
          onChangeText={(text) => setLatitude(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Longitude Y"
          value={longitude}
          onChangeText={(text) => setLongitude(text)}
        />
      </View>
      <View style={{paddingTop: 20}}>
        <TouchableOpacity onPress={handleMapPress}>
          <Image
            source={require('../my-new-project2/assets/map.jpg')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.agenciesContainer}>
        <Text style={styles.agenciesTitle}>Agencies</Text>
        <ScrollView contentContainerStyle={styles.agenciesListContainer}>
          {agenciesList.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => handleAgencyPress(item)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    marginLeft: 25,
    padding: 180,
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
    marginRight: 0,
  },
  latLong: {
    paddingTop: 20, 
    marginLeft: 10, 
    marginRight: 10
  },
  textInput: {
    paddingLeft: 28,
    paddingRight: 2,
    alignItems: 'center',
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
  },
  agenciesContainer: {
    padding: 20,
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  agenciesTitle: {
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  agenciesListContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default AppHeader;
