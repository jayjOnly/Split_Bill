import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, route } from 'react';
import FriendBox from '../components/FriendBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const ChooseFriend = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]
  let selectedItems = route.params.Items;
  let curruser = route.params.User;
  let tax = route.params.Tax
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

  const [users, setusers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([curruser]); // New state for selected users

  const handleFriendSelect = (user) => {
    setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, user]); // Add user to selectedUsers
  };

  const getUserData = async (userId) => {
    try {
      const response = await fetch(
        `http://192.168.3.60:1111/friendlist?user1=${userId}`
      );
      
      if (!response.ok) {
        // console.log(response)
        throw new Error(`Error fetching data: ${response.status}`);
      }
      
      const data = await response.json();
      setusers(data)
      return data;
    } catch (error) {
      console.error(error);
    }
};

  React.useEffect(() => { 
    getUserData(curruser.id)
  }, [])
  console.log("-----------------------------")
  console.log(users)

  

  return (    
    <SafeAreaView style={{flex:1, backgroundColor: "#ADACCC", paddingTop:20}}>
        <ScrollView style={styles.list}>
            {users != undefined ? users.map((x, key) =>
            <FriendBox key={key} name={x.username} telephone={x.phonenumber} ketikaClick={() => {
                console.log("yes")
                console.log(x)
                if(!selectedUsers.includes(x)){
                    handleFriendSelect(x)
                }
                
            }} bentuk ={selectedUsers.includes(x) ? {
                backgroundColor:"#C3CBD9",
                borderRadius:20,
                marginBottom:20,
                padding:15,
                flexDirection:'row',
                alignItems:'center',
                flex:1
            } : null}/>           
            ) : console.log("restart")}
        </ScrollView>

        <TouchableOpacity
            onPress={() => {
                console.log("SELECTED")      
                console.log(selectedUsers)
                navigation.navigate("ChooseType", {SelectUser: selectedUsers, CurrUser: curruser, Item: selectedItems, Tax: tax})
            }}
            style={{
                backgroundColor: "pink",
                padding: 20,
                borderRadius: 10,
            }}>
            <Text
                style={{
                textAlign: 'center',
                fontWeight: '700',
                fontSize: 16,
                color: "white",
                }}>
                Next
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChooseFriend