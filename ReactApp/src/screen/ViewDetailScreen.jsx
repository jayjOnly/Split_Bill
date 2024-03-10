import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';

const ViewDetailScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      backgroundColor: ActiveColor.background
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
    }
  })

  return (
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
  )
}

export default ViewDetailScreen