import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const AfterSpilt = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];
  let users = route.params.UserInfo
  const thing = route.params.Info;

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'center',
    },
    page:{
      backgroundColor: ActiveColor.background,
      flex:1
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
    box1:{
      marginBottom:10,
      marginTop:30,
      padding:10,
      flexDirection:'row',
      backgroundColor:ActiveColor.background2,
      borderRadius:20,
      marginHorizontal:15,
    },
    textheaderItem:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft:20,
      fontSize:18,
      textAlign:'left',
      flex:1
    },
    textheaderqty:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      fontSize:18,
      flex:1,
      // alignSelf:'center',
      textAlign:'center'
    },
    textheaderprice:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      textAlign:'right',
      fontSize:18,
      flex:1,
      marginRight:20
    },
    textItem:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft:20,
      fontSize:15,
      textAlign:'left',
      flex:1
    },
    textqty:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      fontSize:15,
      flex:1,
      textAlign:'center'
    },
    textprice:{
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      textAlign:'right',
      fontSize:15,
      flex:1,
      marginRight:20
    },
    addButton:{
      alignSelf:'center',
      marginTop:10,
      backgroundColor:ActiveColor.button,
      paddingHorizontal:50,
      paddingVertical:10,
      borderRadius:15,
      marginRight:10
    },
    box:{
      marginBottom:10,
      marginTop:10,
      padding:5,
      flexDirection:'row',
      backgroundColor:ActiveColor.background2,
      borderRadius:20,
      marginHorizontal:15
    }
  })
  console.log("AfterSplit")
  console.log(thing[thing.length - 1].cells)

  const data = thing[thing.length - 1].cells
 
  // data.forEach(info =>{
  //   console.log(info)
  // })
  
  

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { item: '', quantity: '', price: null, selectedBy: [] }]);
  };

  React.useEffect(() => {
    const tempItems = [];
    let quantity = 0
    let price = 0
    let name = ""
    data.forEach(info =>{
      if(info.label == "Quantity"){

        quantity = info.text
      }else if(info.label == "Description"){
        name = info.text
      }else if(info.label == "Line_Amount"){
        price = info.text.replace(/,/g, '')
      }
      if(info.col == 3){
        //append ke object 
        tempItems.push({ item: name, quantity: quantity, price: price, selectedBy: [] })
        quantity = 0
        price = 0
        name = ""
      }
    })

    setItems([...items, ...tempItems]);
  }, [])

  console.log(items)

  const handleChange = (text, type, index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, [type]: text } : item))
    );
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const result = () => {
    console.log(items)
  };

  const validateAndNext = () => {
    const hasEmptyFields = items.some(
      (item) => item.item === '' || !isNumber(item.quantity) || item.price === null
    );

    if (hasEmptyFields) {
      const errorMessage = getErrorMessage(items);
      Alert.alert('Validation Error:', errorMessage);
      return;
    }

    // Handle navigating to the next page here (replace with your logic)
    navigation.navigate("ChooseFriend", {Items: items, User: users})
  };

  const isNumber = (value) => {
    return !isNaN(value) && value !== ''; // Check for numeric value and not empty string
  };

  const getErrorMessage = (items) => {
    let errorMessage = '';
    items.forEach((item, index) => {
      if (item.item === '') {
        errorMessage += `Item ${index + 1}: Name is required.\n`;
      }
      if (!isNumber(item.quantity)) {
        errorMessage += `Item ${index + 1}: Quantity must be a number.\n`;
      }
      if (item.price === null) {
        errorMessage += `Item ${index + 1}: Price cannot be empty.\n`;
      }
    });
    return errorMessage;
  };

  const [quantity, setQuantity] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');

  const handleInputChange = (text, label) => {
    switch (label) {
      case 'Quantity':
        setQuantity(text);
        break;
      case 'Description':
        setItemName(text);
        break;
      case 'Line_Amount':
        setPrice(text);
        break;
      default:
        break;
    }
  };

  return (    
    <SafeAreaView style={styles.page}>

      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate("BottomTab") }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Split Bill</Text>
      </View>


      {/* <View>
      {data.map((item) => (
        <View key={item.id}>
          {item.label === 'Quantity' && (
            <TextInput
              value={quantity}
              onChangeText={(text) => handleInputChange(text, item.label)}
              placeholder="Quantity"
              keyboardType="numeric"
            />
          )}
          {item.label === 'Description' && (
            <TextInput
              value={itemName}
              onChangeText={(text) => handleInputChange(text, item.label)}
              placeholder="Item Name"
            />
          )}
          {item.label === 'Line_Amount' && (
            <TextInput
              value={price}
              onChangeText={(text) => handleInputChange(text, item.label)}
              placeholder="Price"
              keyboardType="numeric"
            />
          )}
        </View>
      ))}
      
      </View> */}

      {/* <View>
        {data.map((data) => (
          <View key={data.id}>
            {data.label === 'Description' && <Text>Food Name: {data.text}</Text>}
            {data.label === 'Quantity' && <Text>Quantity: {data.text}</Text>}
            {data.label === 'Line_Amount' && <Text>Price: {data.text}</Text>}
          </View>
        ))}
      </View> */}

      <ScrollView style={{marginBottom:1,flex:1}}>
        <View style={{marginTop:20}}>
          {items.map((item,index) =>{
            return(
              <View key={index} style={{paddingHorizontal:20}}>
                <TextInput
                  value={item.item}
                  onChangeText={(text) => handleChange(text, 'item', index)}
                  placeholder="Item Name"
                />
                
                <View style={{ flexDirection: 'row' }}>
                  <TextInput
                    value={item.quantity}
                    onChangeText={(text) => handleChange(text, 'quantity', index)}
                    keyboardType="numeric"
                    placeholder="Quantity"
                    style={{ flex: 1 }}
                  />
                  <TextInput
                    value={item.price}
                    onChangeText={(text) => handleChange(text, 'price', index)}
                    keyboardType="numeric"
                    placeholder="Price"
                    style={{ flex: 1 }}
                  />
                </View>
                
                <Button title="Remove" onPress={() => removeItem(index)} />
              </View>
            )
          })}
        </View>
        
        <View style={{marginBottom:20, flexDirection:'row', alignSelf:'center'}}>
          <TouchableOpacity onPress={addItem} style={styles.addButton}>
            <Text style={{fontSize:15, color:ActiveColor.text}}>Add</Text>
          </TouchableOpacity>  
          <TouchableOpacity onPress={validateAndNext} style={styles.addButton}>
            <Text style={{fontSize:15, color:ActiveColor.text}}>Next</Text>
          </TouchableOpacity> 
        </View>   
      </ScrollView>
    </SafeAreaView>
  )
}

export default AfterSpilt