import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FriendBox from '../components/FriendBox'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FriendScreen = () => {
  return (
    <View style={{flex:1}}>
      <View style={{marginBottom:70}}>
        <View style={styles.head}>
          <Text style={styles.header}>Friends</Text>

          <TouchableOpacity style={styles.plus}>
            <AntDesign name='plus' size={28} color={'#000000'}/>
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

const styles = StyleSheet.create({
  plus:{
    marginRight:28
  },
  head:{
    flexDirection:'row',
    marginLeft:25,
    marginBottom:6,
    marginTop:15,
    justifyContent:'space-between'
  },
  header:{
    fontSize:20,
    color:'#0F0F0F',
    fontFamily:'Montserrat-Regular'
  }, 
  list:{
    backgroundColor:'#EEEEEE',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25,
    marginHorizontal:8
  },
})