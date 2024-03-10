import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FriendBox from '../components/FriendBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const FriendScreen = () => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

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

  return (
    <View style={{flex:1, backgroundColor: ActiveColor.background}}>
      <View style={{marginBottom:70}}>
        <View style={styles.head}>
          <Text style={styles.header}>Friends</Text>

          <TouchableOpacity style={styles.plus}>
            <AntDesign name='plus' size={28} style={styles.icon}/>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.list}>
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
          <FriendBox />
        </ScrollView>
      </View>
    </View>
  )
}

export default FriendScreen