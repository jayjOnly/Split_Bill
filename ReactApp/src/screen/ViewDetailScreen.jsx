import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';

const getUserData = async (userId) => {
  try {
    const response = await fetch(
      `http://192.168.3.60:1115/activitylist?users=${userId}`
    );
    
    if (!response.ok) {
      // console.log(response)
      throw new Error(`Error fetching data: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const ViewDetailScreen = ({navigation, route}) => {
  const {theme, id, usersname} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]
  const[groupid, setgroupId] = useState('')
  if(route.params != undefined){
    React.useEffect(() => { 
      console.log(route.params.groupid)
      setgroupId(route.params.groupid)  
    }, [])
    
  }

  const[datas, getdatas] = useState([])
  React.useEffect(() => { 
    console.log("satu")
    const fetchData = async (x) => {
      try {
        const data = await getUserData(x);
        getdatas(data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, like displaying an error message
      }
    };

    fetchData(id)
    
  }, [])
  console.log("=========================================")
  console.log(datas)
  console.log(groupid)

  
const newData = datas.filter(item => item.groupID === groupid);

console.log(newData);

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'flex-start',
      backgroundColor: ActiveColor.background,
      paddingBottom:18
    },
    user:{
      alignItems:'center'
    },
    BackButton:{
      marginLeft:15,
      marginTop:20,
      color: ActiveColor.icon
    },
    harga:{
      color: ActiveColor.text,
      fontSize:25,
      fontFamily:'Montserrat-Bold',
      marginTop:30
    },
    des:{
      color: ActiveColor.text,
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      marginTop:8
    },
    profileAvatar: {
      width: 80,
      height: 80,
      borderRadius: 9999,
    },
    signout: {
      marginTop:15,
      alignItems: 'center',
      alignSelf:"center",
      height: 40,
      width:360,
      backgroundColor: ActiveColor.button,
      borderRadius: 15,
      marginBottom: 12,
    },
    signoutLabel:{
      fontSize: 17,
      color: '#FFFFFF',
      fontFamily:'Montserrat-Regular',
      margin:7
    },
    box:{
      backgroundColor: ActiveColor.box,
      marginTop:30,
      borderRadius:20,
      marginHorizontal:15,
      paddingLeft:20,
      paddingBottom:20
    },
    text:{
      alignSelf: "center",
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label,
      marginTop:15,
      marginRight:40,
      marginLeft:20
    },
    line:{
      marginTop:15,
      marginLeft:3,
      marginRight:15,
      flexDirection:"row", 
      height: 1.5, 
      backgroundColor: ActiveColor.text
    },
    row: {
      flexDirection: 'row',
      marginBottom: 5,
      marginTop:10
    },
    label: {
      width: 120, 
      marginRight: 110,
      marginLeft:17,
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label,
    },
    value: {
      fontSize: 17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label,
    },
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
      </View>
      
      <View style={styles.user}>
        <Image
          alt=""
          source={{
          uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
          }}
          style={styles.profileAvatar} />

        <Text style={styles.harga}>Rp500.000</Text>
        <Text style={styles.des}>Judul Aktivitas</Text>
        <Text style={styles.des}>Day, DD Months YYYY</Text>
      </View>
      
      <View style={styles.box}>
        {newData.map((d,i) =>
          <View key={i} style={{justifyContent:'center',flexDirection:'row'}}>
            <Text style={styles.text}>{d.itemName}</Text>
            <Text style={styles.text}>{d.itemPrice}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default ViewDetailScreen