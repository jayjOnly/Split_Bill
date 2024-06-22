import { StyleSheet, Text, TouchableOpacity, View, Image, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';

const ViewHistoryDetailScreen = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]
  let groupID = route.params.groupID
  let assignID = route.params.assignID

  const[datas, getdatas] = useState([])

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://192.168.3.60:4444/historydetail?groupID=${groupID}&assignID=${assignID}`
      );
      
      if (!response.ok) {
        // console.log(response)
        throw new Error(`Error fetching data: ${response.status}`);
      }
      
      const data = await response.json();
      getdatas(data)
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (assignID && groupID) {
      getUserData();
    }
  }, [assignID, groupID]); 

  console.log(datas)

  const groupDataByUser = (data) => {
    const groupedData = data.reduce((acc, item) => {
      if (!acc[item.userID]) {
        acc[item.userID] = {
          userID: item.userID,
          username: item.username,
          items: []
        };
      }
      acc[item.userID].items.push({ itemName: item.itemName, itemPrice: item.itemPrice });
      return acc;
    }, {});
  
    // Sort items within each user group
    Object.values(groupedData).forEach(user => {
      user.items.sort((a, b) => a.itemName === 'TAX' ? 1 : (b.itemName === 'TAX' ? -1 : 0));
    });
  
    return groupedData;
  };
  
  const groupedData = groupDataByUser(datas);
  const groupedArray = Object.values(groupedData);

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text style={styles.username}>{item.username}</Text>
      {item.items.map((itemDetail, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemText}>{itemDetail.itemName}: {itemDetail.itemPrice}</Text>
        </View>
      ))}
    </View>
  );

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor: ActiveColor.background,
      paddingBottom:18
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
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8'
    },
    userContainer: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 3
    },
    username: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10
    },
    itemContainer: {
      marginBottom: 5
    },
    itemText: {
      fontSize: 16
    }
  })

  return (
    <View style={{flex:1, backgroundColor: ActiveColor.background}}>

      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate('BottomTab') }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity>

        <Text style={styles.title}>Details</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={groupedArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.userID.toString()}
        />
      </View>
      {/* <Button title="Fetch Data" onPress={handleFetchData} /> */}
    </View>  
  )
}

export default ViewHistoryDetailScreen