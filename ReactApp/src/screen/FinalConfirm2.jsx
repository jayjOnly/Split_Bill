import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const FinalConfirm2 = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];

  let items = route.params.Item;
  console.log("ITEMS")
  console.log(items)
  let curruser = route.params.CurrUser
  let people = route.params.SelectUser;
  console.log("People")
  console.log(people)
  let tax = route.params.Tax;
  let total = parseFloat(0)
  items.forEach(x => {
    total = total + parseFloat(x.price)
    console.log(total)
  });
  console.log("TOTAL")
  console.log(total)
  let count = 0
  people.forEach((x) =>{
    count += 1
  })
  billperperson = (total/parseFloat(count)).toFixed(2)
  taxperperson = (total*parseFloat(tax)/100)/parseFloat(count)
  console.log("count")
  console.log(taxperperson)
  console.log(billperperson)
  const styles = StyleSheet.create({
    page:{
      backgroundColor:ActiveColor.background,
    },
    screen:{
      flexDirection:'row',
      justifyContent:'center',
    },
    BackButton:{
      marginLeft:15,
      marginTop:20,
      color: ActiveColor.icon
    },
    title:{
        textAlign:'center',
        flex:1,
        marginTop:20,
        fontSize:18,
        fontWeight:'700',
        marginRight:15,
        color: ActiveColor.text
    },
    NextButton:{
      alignSelf:'center',
      marginTop:20,
      backgroundColor:ActiveColor.button,
      paddingHorizontal:50,
      paddingVertical:10,
      borderRadius:15,
    },
    FinishButton:{
        alignSelf:'center',
        marginTop:20,
        backgroundColor:ActiveColor.button,
        paddingHorizontal:50,
        paddingVertical:10,
        borderRadius:15,
      },
  })
  people.forEach((x)=>{
    console.log(x)
  })
  
  const groupedData = {};
  for (const userId of people) {
    if (!groupedData[userId.id]) {
      groupedData[userId.id] = []; // Initialize the array for the user if it doesn't exist
    }
    
    groupedData[userId.id].push({
        item: "BAGI RATA",
        price: billperperson,
        quantity: "1",
        selectedBy: [0]
    });
  }

  
  
  console.log(groupedData)


  const handleAddActivity = async () => {
    fetch('http://192.168.3.60:5000/activitylist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "datas": groupedData,
          "tax": taxperperson,
          "assignID": curruser.id
        })
    })
    .catch(error => console.error('Error:', error));
  };

  return (    
    <SafeAreaView style={{flex:1}}>
        <ScrollView style={{ padding: 10, flex:1 }}>
        {people != undefined ? people.map((peoples, key) => 
            <View key={key}>
                <Text style={{ fontWeight: 'bold' }}>{peoples.username}:</Text> 
                <Text>Bill - Rp. {billperperson}</Text>
                <Text>Tax - Rp. {taxperperson}</Text>
            </View>    
        ) : console.log("people not found")}
        
            
          <View style={{marginBottom:20, alignSelf:'center'}}>
            <TouchableOpacity onPress={() => {
              handleAddActivity()
              navigation.navigate("BottomTab")
              }} style={styles.FinishButton}>
              <Text style={{fontSize:15, color:ActiveColor.intext}}>Confirm</Text>
            </TouchableOpacity>  
          </View>          
        </ScrollView>

    </SafeAreaView>
  )
}

export default FinalConfirm2