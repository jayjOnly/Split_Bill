import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const FinalConfirm = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  const {selectedItems , people} = route.params;

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

  console.log(selectedItems)
  console.log(people)

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

  const groupedData = groupBySelectedId(selectedItems, people);

  const findNameById = (id) => {
    const foundItem = people.find((item) => item.id === id);
    return foundItem ? foundItem.name : null;
  };

  console.log(groupedData)
  
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
                      {item.item} - Rp{calculateSplitPrice(item, selectedItems)}
                      </Text>
                  ))}
                  </View>
              )}
              </View>
          ))}

          <View style={{marginBottom:20, alignSelf:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate("BottomTab")} style={styles.FinishButton}>
              <Text style={{fontSize:15, color:ActiveColor.intext}}>Confirm</Text>
            </TouchableOpacity>  
          </View>          
        </ScrollView>

    </SafeAreaView>
  )
}

export default FinalConfirm