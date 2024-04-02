import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../config/theme'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const ActivityBox = ({navi, name, nominal, date}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];

  const styles = StyleSheet.create({
    box:{
      flex:1,
      backgroundColor: ActiveColor.background,
      borderRadius:20,
      justifyContent:'center',
      marginBottom:20,
      padding:15
    },
    text:{
      marginBottom:5,
      fontFamily:'Montserrat-Light',
      color: ActiveColor.text
    },
    harga:{
      marginBottom:20,
      fontSize:25,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.label
    },
    ButtonLabel:{
      fontSize: 17,
      color: ActiveColor.intext,
      fontFamily:'Montserrat-Regular',
      margin:7,
      padding:2
    },
    Button:{
      alignItems: 'center',
      backgroundColor: ActiveColor.button,
      borderRadius:15
    }
  })

  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>{name} | {date}</Text>
        {/* <Text style={styles.text}>Activity</Text> */}
        <Text style={styles.harga}>Rp{nominal}</Text>
        <TouchableOpacity
            onPress={navi}
            style={styles.Button}>

            <Text style={styles.ButtonLabel}>View Detail</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default ActivityBox