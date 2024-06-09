import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid, FlatList } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { useIsFocused } from '@react-navigation/native';
import { User } from '../components/OOP';
import axios from 'axios';

// global.Buffer = require('buffer').Buffer;

// const uploadImage = async (imageUri, imageType, imageName) => {
//   const formData = new FormData();
//   formData.append('file', {
//     uri: imageUri,
//     type: imageType, // adjust the type according to your image format
//     name: imageName, // you can adjust the filename as well
//   });

//   try {
//     const response = await fetch('http://192.168.241.60:5000/upload', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// const AcessGallery = async () => {
//   const result = await launchImageLibrary({mediaType: 'photo', quality: 1})
//   if(result.assets != undefined){
//     console.log(result.assets[0])

//     const formData = new FormData();
//     formData.append('file', {
//       uri: result.assets[0].uri,
//       type: result.assets[0].type, // adjust the type according to your image format
//       name: result.assets[0].fileName, // you can adjust the filename as well
//     });

//     try {
//       const response = await fetch('http://10.0.2.2:5000/upload', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
// }

// const performOCR = async () => {
//   const url = 'https://app.nanonets.com/api/v2/OCR/Model/c793292e-86cd-45ff-9545-58e487768d51/LabelFile/?async=false';

//   const result = await launchImageLibrary({mediaType: 'photo', quality: 1})
//   const formData = new FormData();
//   formData.append('file', {
//     uri: result.assets[0].uri,
//     type: result.assets[0].type, // adjust the type according to your image format
//     name: result.assets[0].fileName, // you can adjust the filename as well
//   });
//   console.log(result)

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'Authorization' : 'Basic ' + Buffer.from('eeb6b933-0a11-11ef-a76e-da0c4b140285' + ':').toString('base64')
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

const SplitScreen = () => {
  const [currentDate, setCurrentDate] = useState(null);
  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toString()); // Or use other formatting methods
  }, []);
  const groupedData = {
    "4": [
      {"item": "Bread Butter Pudding", "price": "11500", "quantity": "1", "selectedBy": [4]},
      {"item": "Cream Bruille", "price": "14000", "quantity": "1", "selectedBy": [4,5]}
    ],
    "5": [
      {"item": "Cream Bruille", "price": "14000", "quantity": "1", "selectedBy": [4,5]},
      {"item": "Choco Croissant", "price": "10500", "quantity": "1", "selectedBy": [5]},
      {"item": "Bank Of Chocolat", "price": "7500", "quantity": "1", "selectedBy": [5]}
    ]
  };

  for (const userId in groupedData) {
    console.log("User ID:", userId);
  
    // Access the array of items for the current user ID
    const items = groupedData[userId];
  
    // Loop through each item in the user's array
    for (const item of items) {
      console.log("  - Item:", item.item);
      console.log("    - Price:", (item.price/(item.selectedBy).length).toFixed(2));
      console.log("    - Quantity:", item.quantity);
      console.log(currentDate)
      // console.log("    - Selected By:", (item.selectedBy).length); // Print selectedBy as well
    }
    console.log("---"); // Separator between users
  }
//   const user1 = new User("user001", "Jacky", 19, "male", "jackydummy@gmail.com", "JackyTheGreat", "nandoanjing")
//   console.log(user1)

//   const [data, setData] = useState([])
//   useEffect(()=> {
//       fetch("http://10.0.2.2:5000/output", {method: 'GET'}).then(
//         res => res.json()
//       ).then(
//           x => {
//           setData(x)
//           }
//       ).catch(error => console.log(error))
//   }, [])

//   console.log(data)
const handleAddActivity = async () => {
  fetch('http://192.168.69.1:5000/activitylist', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "datas": groupedData,
        "tax": 10000,
      })
  })
  .catch(error => console.error('Error:', error));
};

  return(
    <View>
      <Text>Test</Text>
      <TouchableOpacity
        onPress={() => {
          handleAddActivity()
        }}
  
        style={{
            backgroundColor: "blue",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
        }}>
        <Text
            style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: "white",
            }}>
            Add Friend
        </Text>
      </TouchableOpacity>
      {/* <View style={{margin:20}}>
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
          }} onPress={performOCR}>
            <Text style={{alignSelf:'center'}}>Upload File</Text>
          </TouchableOpacity>
        </View> */}
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