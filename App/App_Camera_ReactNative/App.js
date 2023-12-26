import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        console.log(data.uri);
        // You can now use the captured image data (data.uri)
      } else {
        console.error('Camera reference is null.');
      }
    } catch (error) {
      console.error('Error taking picture:', error.message);
    }
  };

  const recordVideo = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: RNCamera.Constants.VideoQuality['288p'] };
        const data = await cameraRef.current.recordAsync(options);
        console.log(data.uri);
        // You can now use the recorded video data (data.uri)
      } else {
        console.error('Camera reference is null.');
      }
    } catch (error) {
      console.error('Error recording video:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => (cameraRef.current = ref)} // Update cameraRef on component mount
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', paddingBottom:10 }}>
        <TouchableOpacity onPress={takePicture}>
          <Text style={styles.capture}> SNAP </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={recordVideo}>
          <Text style={styles.capture}> RECORD </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraScreen;
