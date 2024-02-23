import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Button, Pressable, PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import { useIsFocused } from '@react-navigation/native'


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

const AcessGallery = async () => {
  const result = await launchImageLibrary({mediaType: 'photo', quality: 1})
}

const SplitScreen = () => {
  const isFocused = useIsFocused()
  const [state , setstate] = useState(true)
  return (
    <View style={{flex:1}}>
      <Modal isVisible={state} onBackdropPress={() => setstate(false)} >
        <View style={styles.modalview}>

          <Text style={styles.titleLabel}>What would you like to choose?</Text>

          <View style={styles.row}>
            <View style={{alignContent:'center'}}>
              <TouchableOpacity style={styles.buttons} onPress={AcessGallery}>
                <MaterialCommunityIcons name='image-multiple-outline' size={45} color={"#33363E"} style={{alignSelf:'center'}} />    
              </TouchableOpacity>
              <Text style={styles.rowLabel}>Gallery</Text>
            </View>

            <View style={{alignContent:'center',marginLeft:80}}>
              <TouchableOpacity style={styles.buttons} onPress={AccessCamera}>
              <MaterialCommunityIcons name='camera' size={45} color={"#33363E"} style={{alignSelf:'center'}} />
              </TouchableOpacity>
              <Text style={styles.rowLabel}>Camera</Text>

            </View>        
          </View>     
        </View>      
      </Modal>
    </View>  
  );
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