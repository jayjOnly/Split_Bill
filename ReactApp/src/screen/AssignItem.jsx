import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const AssignItem = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  const {items} = route.params;

  const styles = StyleSheet.create({
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
  })
  
  // console.log(items)

  const people = [
    { id: 10, name: 'John Doe' },
    { id: 20, name: 'Jane Smith' },
    { id: 35, name: 'Michael Brown' },
    { id: 47, name: 'John Doe' },
    { id: 58, name: 'Jane Smith' },
    { id: 69, name: 'Michael Brown' }
  ];

  const ListItem = ({ name, isSelected, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ fontSize: 18, padding: 10, fontWeight: isSelected ? 'bold' : 'normal' }}>
        {name}
      </Text>
    </TouchableOpacity>
  );

  const [selectedPersonId, setSelectedPersonId] = useState(people[0].id);
  const [selectedItems, setSelectedItems] = useState(
    items.map((item) => ({ ...item, selectedBy: [] })) // Initialize each item with empty "selectedBy" array
  );

  const renderPeople = () =>
    people.map((person) => (
      <ListItem
        key={person.id} // Key for each item
        name={person.name}
        isSelected={selectedPersonId === person.id}
        onPress={() => setSelectedPersonId(person.id)}
      />
    ));

  const handleItemSelection = (item) => {
    const newSelectedItems = selectedItems.map((selectedItem) => {
      if (selectedItem === item) {
        return {
          ...selectedItem,
          selectedBy: selectedItem.selectedBy.includes(selectedPersonId)
            ? selectedItem.selectedBy.filter((id) => id !== selectedPersonId)
            : [...selectedItem.selectedBy, selectedPersonId],
        };
      }
      return selectedItem;
    });
    setSelectedItems(newSelectedItems);
  };

  const navigateToNext = () => {
    // console.log(selectedItems)
    navigation.navigate("FinalConfirm", { selectedItems , people });
  };

  return (    
    <SafeAreaView style={styles.page}>
      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate("AfterSpilt") }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Assign Item</Text>
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {renderPeople()}
          </View>
        </ScrollView>
        
        <ScrollView style={{ padding: 10 }}>
          {selectedItems.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ flex: 1, fontWeight: item.selectedBy.includes(selectedPersonId) ? 'bold' : 'normal' }}
                onPress={() => handleItemSelection(item)}
              >
                <View>
                  <Text style={{ padding: 10, fontWeight: item.selectedBy.includes(selectedPersonId) ? 'bold' : 'normal'}}>{item.item}</Text>
                  <View style={{ flexDirection: 'row'}}>
                    <Text style={{ flex: 1, padding: 10, fontWeight: item.selectedBy.includes(selectedPersonId) ? 'bold' : 'normal'}}>{item.quantity}</Text>
                    <Text style={{ flex: 1, padding: 10, fontWeight: item.selectedBy.includes(selectedPersonId) ? 'bold' : 'normal'}}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <Button title="Next" onPress={navigateToNext} style={{ margin: 10 }} />
      
    </SafeAreaView>
  )
}

export default AssignItem