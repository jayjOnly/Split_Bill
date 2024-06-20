import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, route } from 'react';
import FriendBox from '../components/FriendBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const getUserData = async (userId) => {
  try {
    const response = await fetch(
      `http://172.16.0.29:1111/friendlist?user1=${userId}`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};


const FriendScreen = ({navigation, route}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]
  const [usersname, setusername] = useState()
  const [usersid, setuserid] = useState()
  const [friends, setFriendData] = useState()
  const [users, setusers] = useState([])
  

  React.useEffect(() => { 
    const fetchData = async (x) => {
      try {
        const data = await getUserData(x);
        setFriendData(data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, like displaying an error message
      }
    };

    if(route.params != undefined){
      setusers(route.params)
      setusername(route.params.username)
      setuserid(route.params.id)
      fetchData(route.params.id);
    }
  }, [])
  console.log("------------------------------------friendpage--------------------------------------")
  console.log(usersname) 
  console.log(usersid)
  console.log(friends)
  

  const styles = StyleSheet.create({
    plus:{
      marginRight:28
    },
    icon:{
      color: ActiveColor.icon
    },
    head:{
      flexDirection:'row',
      marginLeft:25,
      marginBottom:12,
      marginTop:15,
      justifyContent:'space-between'
    },
    header:{
      fontSize:20,
      color: ActiveColor.text,
      fontFamily:'Montserrat-Regular'
    }, 
    list:{
      backgroundColor: ActiveColor.box,
      paddingHorizontal: 15,
      paddingVertical:15,
      borderRadius:25,
      marginHorizontal:8
    },
  })


  let datas = {users, friends}
  return (
    <SafeAreaView style={{flex:1, backgroundColor: ActiveColor.background}}>
        <View style={{marginBottom:70}}>
          <View style={styles.head}>
            <Text style={styles.header}>Friends</Text>
            <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate("AddFriend", {datas})}>
              <AntDesign name='plus' size={28} style={styles.icon}/>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.list}>
            
              {friends != undefined ? friends.map((x, key) =>
                <FriendBox key={key} name={x.username} telephone={x.phonenumber}/>           
              ) : console.log("restart")}
              

          </ScrollView>
        </View>

    </SafeAreaView>
    
  )
}

export default FriendScreen