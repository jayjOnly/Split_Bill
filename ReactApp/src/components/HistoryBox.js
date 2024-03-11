import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const ActivityBox = ({navi}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    box:{
      flex:1,
      backgroundColor: ActiveColor.background ,
      borderRadius:20,
      justifyContent:'center',
      marginBottom:20,
      padding:15,
    },
    text:{
      marginBottom:5,
      fontFamily:'Montserrat-Light',
      color: ActiveColor.text,
      marginLeft:5
    },
    harga:{
      marginBottom:10,
      fontSize:25,
      fontFamily:'Montserrat-Regular',
      color: ActiveColor.text,
      marginLeft:5
    },
  })

  return (
    <View>
      <TouchableOpacity onPress={navi}>
        <View style={styles.box}>
          <Text style={styles.text}>Judul</Text>
          <Text style={styles.text}>DD-MM-YY</Text>
          <Text style={styles.harga}>Rp. 100.000</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ActivityBox