import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid, FlatList } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { useIsFocused } from '@react-navigation/native';

const AcessAPI = async () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("/member").then(
          res => res.json()
        ).then(
            x => {
            setData(x)
            console.log(x)
            }
        )
    }, [])
}

const SplitScreen = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        // console.log("yes")
        fetch("http://10.0.2.2:5000/member").then(
          res => res.json()
        ).then(
            x => {
            setData(x)
            console.log(x)
            }
        ).catch(error => console.log(error))
    }, [])
    // useEffect
    // useEffect
    console.log(data)
  return(
    <View>
      <Button
        onPress={
            
            () => console.log(data)
        }
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  page:{
    alignContent:'center',
    justifyContent:'center',
    flex:1
  },
  ScanButton:{
    height:30
  },

  modalview:{
    backgroundColor:"white",
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius:15
  },
  

  titleLabel:{
    fontSize: 17,
    color: '#B9B9B9',
    fontWeight: 'bold',
    margin:7,
    textAlign:"center"
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop:15,
    marginBottom:10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  
  rowLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#B9B9B9',
    marginTop: 3
  },

  buttons:{
    backgroundColor:"#DCE1F0",
    width:70,
    height:54,
    borderRadius:5,
    alignContent:'center',
    justifyContent:'center'
    // marginTop: 10 
  }
})

export default SplitScreen;