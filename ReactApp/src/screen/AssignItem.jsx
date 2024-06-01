import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const AssignItem = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  console.log(route)
  
  let items = route.params.Item;
  let total = parseFloat(0)
  items.forEach(x => {
    // console.log(x.price)
    
    total = total + parseFloat(x.price)
    console.log(total)
  });
  console.log("TOTAL")
  console.log(total)
  
  let people = route.params.SelectUser;
  let tax = route.params.Tax;
  console.log(tax)
  let curruser = route.params.CurrUser
  console.log(items)
  console.log("PEOPLE")
  console.log(people)

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
  })
  
  // console.log(items)

  // const people = [
  //   { id: 10, username: 'John Doe' },
  //   { id: 20, username: 'Jane Smith' },
  //   { id: 35, username: 'Michael Brown' },
  //   { id: 47, username: 'John Doe' },
  //   { id: 58, username: 'Jane Smith' },
  //   { id: 69, username: 'Michael Brown' }
  // ];

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
        name={person.username}
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
    navigation.navigate("FinalConfirm", { Select: selectedItems , People: people, Tax: tax, Total: total});
  };

  return (    
    <SafeAreaView style={styles.page}>
      <View style={styles.screen}>
        {/* <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate("AfterSpilt") }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity> */}
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
                style={{ flex: 1, backgroundColor:ActiveColor.background2, borderRadius:20, padding:7}}
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

        <View style={{marginBottom:20, alignSelf:'center'}}>
          <TouchableOpacity onPress={navigateToNext} style={styles.NextButton}>
            <Text style={{fontSize:15, color:ActiveColor.intext}}>Confirm</Text>
          </TouchableOpacity>  
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default AssignItem