import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';

const ViewHistoryDetailScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor: ActiveColor.background,
      paddingBottom:18
    },
    user:{
      flexDirection:'row',
      marginTop:10
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
    text:{
      marginBottom:5,
      fontFamily:'Montserrat-Light',
      fontSize:20,
      color: ActiveColor.text
    },
    text2:{
      marginBottom:8,
      fontSize:22,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label
    },
    text3:{
      alignSelf: "center",
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label
    },
    text4:{
      alignSelf: 'center',
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      marginLeft:70,
      color: ActiveColor.label
    },
    profileAvatar: {
      width: 50,
      height: 50,
      borderRadius: 9999,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    label: {
      width: 120, 
      marginRight: 180,
      fontSize:17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label,
    },
    value: {
      fontSize: 17,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label,
    },
    line:{
      margin:15, flexDirection:"row", 
      height: 1.5, 
      backgroundColor: ActiveColor.text
    },
    signout: {
      marginTop:10,
      alignItems: 'center',
      alignSelf:"center",
      height: 40,
      width:370,
      backgroundColor: '#E71919',
      borderRadius: 15,
      marginBottom: 12,
    },
    signoutLabel:{
      fontSize: 17,
      color: '#FFFFFF',
      fontWeight: 'bold',
      margin:7
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

        <Text style={styles.title}>Details</Text>
      </View>

      <View style={{backgroundColor: ActiveColor.background2, marginHorizontal:10, marginVertical: 10, borderRadius:20, paddingVertical:25}}>
        <View style={{marginLeft:25}}>
          <Text style={styles.text2}>Judul | DD-MM-YY</Text>
          <Text style={styles.text2}>Total Bill = Rp. 2.000.000</Text>
        </View>

        <View style={{marginLeft:30, marginTop:30}}>
          <Text style={styles.text2}>Details</Text>
        </View>


          
        <View style={{marginLeft:30}}>
         <View style={styles.user}>
            <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />
            <View style={{marginLeft:20}}>
              <Text style={{fontSize:15, fontFamily:'Montserrat-Regular', color: ActiveColor.label}}>Osama</Text>
              <Text style={{fontSize:20, fontFamily:'Montserrat-Regular', color: ActiveColor.label}}>Rp. 911.000</Text>
            </View>
          </View>

          <View style={{flexDirection:'row', marginTop:18, alignItems:"center"}}>
            <Text style={styles.text3}>Benda</Text>
            <Text style={styles.text4}>x1</Text>
            <Text style={styles.text4}>Rp. 900.000</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:2, alignItems:"center"}}>
            <Text style={styles.text3}>Benda</Text>
            <Text style={styles.text4}>x1</Text>
            <Text style={styles.text4}>Rp. 11.000</Text>
          </View>
        </View>
      
        <View style={styles.line} />

        <View style={{marginLeft:30}}>
          <View style={styles.user}>
            <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />
            <View style={{marginLeft:20}}>
              <Text style={{fontSize:15, fontFamily:'Montserrat-Regular', color: ActiveColor.label}}>Hitlah</Text>
              <Text style={{fontSize:20, fontFamily:'Montserrat-Regular', color: ActiveColor.label}}>Rp. 1.099.000</Text>
            </View>
          </View>

          <View style={{flexDirection:'row', marginTop:18, alignItems:"center"}}>
            <Text style={styles.text3}>Benda</Text>
            <Text style={styles.text4}>x1</Text>
            <Text style={styles.text4}>Rp. 1.099.000</Text>
          </View>
        </View>

        <View style={styles.line} />  

        <View style={{marginLeft:30}}>
          <View style={styles.row}>
            <Text style={styles.label}>Tax</Text>
            <Text style={styles.value}>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Service Fee</Text>
            <Text style={styles.value}>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.value}>0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Others</Text>
            <Text style={styles.value}>0</Text>
          </View>  
        </View>
          
      </View>
        <TouchableOpacity
              onPress={() => navigation.navigate("BottomTab")}
              style={styles.signout}>

              <Text style={styles.signoutLabel}>Send Details</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ViewHistoryDetailScreen