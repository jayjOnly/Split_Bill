import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid, FlatList } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { useIsFocused } from '@react-navigation/native'


const SplitScreen = () => {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch("/member").then(
      res => res.json()
    ).then(
        x => {
          setData(x)
        }
    )
  })

  console.log(data)
  return(
    <View>
      
    </View>
  )
};

const styles = StyleSheet.create({})

export default SplitScreen;