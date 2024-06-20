import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const FinalConfirm = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  const [currentDate, setCurrentDate] = useState(null);
  useEffect(() => {
    const today = new Date();
    setCurrentDate(today.toString()); // Or use other formatting methods
  }, []);
  let ActiveColor = colors[theme.mode];
  let selectedItems = route.params.Select 
  let people = route.params.People;
  let tax = route.params.Tax;
  let total = route.params.Total;
  let count = 0
  let curruser = route.params.CurrUser
  people.forEach((x) =>{
    count += 1
  })
  console.log(people)
  console.log(count)
  console.log(tax)
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

  taxperperson = (total*parseFloat(tax)/100)/parseFloat(count)
  console.log("TAX")
  console.log(taxperperson)

  const groupBySelectedId = (selectedItems, people) => {
    const groupedItems = {};
    people.forEach((person) => {
      groupedItems[person.id] = [];
    });

    selectedItems.forEach((item) => {
      const selectedBy = item.selectedBy;
      selectedBy.forEach((personId) => {
        const personID = people.find((p) => p.id === personId)?.id;
        if (personID) {
            groupedItems[personID].push(item);
        }
      });
    });
    console.log("Grouped")
    console.log(groupedItems)
    return groupedItems;
  };

  const findItemIndexByName = (itemName) => {
    return selectedItems.findIndex((item) => item.item === itemName);
  };

  const calculateSplitPrice = (item, selectedItems) => {
    const key = findItemIndexByName(item.item);
    const numSelected = selectedItems[key].selectedBy.length;
    return (numSelected > 0) ? (item.price / numSelected).toFixed(2) : 0.00;
  };

  let groupedData = groupBySelectedId(selectedItems, people);
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
    }
    console.log("---"); // Separator between users
  }

  const findNameById = (id) => {
    const foundItem = people.find((item) => item.id === id);
    return foundItem ? foundItem.username : null;
  };
 

  const handleAddActivity = async () => {
    fetch('http://192.168.69.1:5000/activitylist', {
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
          
          {Object.entries(groupedData).map(([personId, items]) => (
              <View key={personId} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{findNameById(parseInt(personId))}:</Text> 
              {items.length === 0 ? (
                  <Text>No items selected</Text>
              ) : (
                  <View>
                  {items.map((item,i) => ( 
                      <Text key={i}>
                      {item.item} - Rp. {calculateSplitPrice(item, selectedItems)}
                      </Text>
                  ))}
                  <Text>Tax - Rp. {taxperperson}</Text>
                  </View>
              )}
              </View>
          ))}

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

export default FinalConfirm