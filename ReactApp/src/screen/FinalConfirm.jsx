import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const FinalConfirm = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  const {selectedItems , people} = route.params;

  const styles = StyleSheet.create({

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
    <SafeAreaView>
        <View style={{ padding: 10 }}>
            {Object.entries(groupedData).map(([personId, items]) => (
                <View key={personId} style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{personId} {findNameById(parseInt(personId))} Selected:</Text> 
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
         </View>
    </SafeAreaView>
  )
}

export default FinalConfirm