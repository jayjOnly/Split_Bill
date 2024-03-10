import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid, FlatList } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { useIsFocused } from '@react-navigation/native';


const uploadImage = async (imageUri, imageType, imageName) => {
  const formData = new FormData();
  formData.append('file', {
    uri: imageUri,
    type: imageType, // adjust the type according to your image format
    name: imageName, // you can adjust the filename as well
  });

  try {
    const response = await fetch('http://10.0.2.2:5000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const AcessGallery = async () => {
  const result = await launchImageLibrary({mediaType: 'photo', quality: 1})
  if(result.assets != undefined){
    console.log(result.assets[0])

    const formData = new FormData();
    formData.append('file', {
      uri: result.assets[0].uri,
      type: result.assets[0].type, // adjust the type according to your image format
      name: result.assets[0].fileName, // you can adjust the filename as well
    });

    try {
      const response = await fetch('http://10.0.2.2:5000/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
}

const SplitScreen = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch("http://10.0.2.2:5000/output", {method: 'GET'}).then(
          res => res.json()
        ).then(
            x => {
            setData(x)
            }
        ).catch(error => console.log(error))
    }, [])

    console.log(data)

  return(
    <View>
      <View style={{margin:20}}>
        <TouchableOpacity style={{
            backgroundColor:"#DCE1F0",
            width:150,
            height:60,
            borderRadius:5,
            alignContent:'center',
            justifyContent:'center'
          }} onPress={() => console.log(data)}>
            <Text style={{alignSelf:'center'}}>Get Data</Text>
          </TouchableOpacity>
      </View>
        <View style={{margin:20}}>
          <TouchableOpacity style={{
            backgroundColor:"#DCE1F0",
            width:150,
            height:60,
            borderRadius:5,
            alignContent:'center',
            justifyContent:'center'
          }} onPress={AcessGallery}>
            <Text style={{alignSelf:'center'}}>Upload File</Text>
          </TouchableOpacity>
        </View>
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