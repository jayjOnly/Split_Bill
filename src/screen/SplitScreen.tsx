import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AccessCamera = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  )

  if(granted === PermissionsAndroid.RESULTS.GRANTED){
    const result = await launchCamera({mediaType: 'photo', quality: 1}, (res) => {
      if(res.didCancel){
        console.log("User Cancel")
      }else if(res.errorCode){
        console.log(res.errorCode)
      }else{
        console.log(res.assets)
      }
    })
  }else{
    console.log("NO PERMISSION")
  }
  
  
}

const SplitScreen = () => {

  return (
    <View>
      <Text>Testing</Text>
      <Button
        onPress={AccessCamera}
        title="Learn More"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
    
  );
};

export default SplitScreen;