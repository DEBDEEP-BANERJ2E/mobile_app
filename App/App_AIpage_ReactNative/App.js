import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const AppHeader = () => {
  const [message, setMessage] = useState('');
  const [largeText, setLargeText] = useState('');
  const [textBoxHeight, setTextBoxHeight] = useState(50); // Initial height of the text box

  const handleMenuPress = () => {
    console.log('Menu Pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile Icon Pressed');
  };

  const handleCameraPress = () => {
    console.log('Camera Icon Pressed');
  };

  const onContentSizeChange = (contentWidth, contentHeight) => {
    // Update the height of the text box based on the content height
    setTextBoxHeight(contentHeight + 20); // Adding some padding
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setLargeText(messages.join('\n')); // Concatenate messages with line breaks
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <ImageBackground
      source={require('../my-new-project2/assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
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

        <TouchableOpacity onPress={handleCameraPress} style={styles.cameraIcon}>
          <Image
            source={require('../my-new-project2/assets/camera.jpg')}
            style={styles.cameraImage}
          />
        </TouchableOpacity>

        <View style={styles.headerBar} />
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ paddingTop: 20 }}>
            <View style={[styles.largeTextBox, { height: textBoxHeight }]}>
              <TextInput
                style={styles.largeTextInput}
                placeholder="Large Text Box"
                multiline
                value={largeText}
                onChangeText={(text) => setLargeText(text)}
                onContentSizeChange={(e) =>
                  onContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
                }
              />
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={styles.textBox}>
              <TextInput
                style={styles.textInput}
                placeholder="Type your message here..."
                multiline
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
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
  cameraIcon: {
    position: 'absolute',
    top: 90,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
  },
  cameraImage: {
    width: 20,
    height: 20,
    justifyContent: 'flex-end',
    padding: 20,
  },
  largeTextBox: {
    margin: 20,
  },
  largeTextInput: {
    fontSize: 20,
    color: 'black',
    textAlignVertical: 'top',
    padding: 10,
  },
  textBox: {
    margin: 20,
    borderWidth: 5,
    borderColor: 'red',
    marginBottom: 10,
    borderRadius: 5,
  },
  textInput: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 30, // Adjust the value as needed
  },
});

export default AppHeader;
