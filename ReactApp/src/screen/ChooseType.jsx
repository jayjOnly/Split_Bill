import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, route } from 'react';
import FriendBox from '../components/FriendBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChooseType = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  console.log(route.params)
  let ActiveColor = colors[theme.mode]
  let selectedItems = route.params.Item;
  let curruser = route.params.CurrUser;
  let tax = route.params.Tax
  let selectedUsers = route.params.SelectUser
  console.log("TEST")
  console.log(selectedUsers)  
  console.log(curruser)
  console.log(selectedItems)

  const styles = StyleSheet.create({
    FinishButton:{
      alignSelf:'center',
      marginTop:20,
      backgroundColor:ActiveColor.button,
      paddingHorizontal:50,
      paddingVertical:10,
      borderRadius:15,
    },
  })

  return (    
    <SafeAreaView style={{flex:1, backgroundColor: "#ADACCC", paddingTop:20}}>
        <View style={{marginVertical:250}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AssignItem", {SelectUser: selectedUsers, CurrUser: curruser, Item: selectedItems, Tax: tax})     
          }}
          style={{
            backgroundColor: ActiveColor.button,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            marginHorizontal: 10
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: ActiveColor.intext,
            }}>
            Assign Each User's Item
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FinalConfirm2", {SelectUser: selectedUsers, CurrUser: curruser, Item: selectedItems, Tax: tax})     
          }}
          style={{
            backgroundColor: ActiveColor.button,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            marginHorizontal: 10
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: ActiveColor.intext,
            }}>
            BAGI RATA AJA BOSSS
          </Text>
        </TouchableOpacity>
    </View>
        
    </SafeAreaView>
  )
}

export default ChooseType