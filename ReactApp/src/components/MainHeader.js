import React from 'react';
import { StyleSheet,Text, Button, View, ImageComponent, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const MainHeader = ({title, navi}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    cointainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"flex-start",
      paddingHorizontal: 15,
      paddingVertical:15,
    },
    title:{
        fontSize:18,
        color: ActiveColor.text,
        fontFamily:'Montserrat-Regular'
    },
    icon:{
      color: ActiveColor.icon
    }
  })

  return (
    <View style={[styles.cointainer]}>
      <Text style={styles.title}>Welcome {title}!</Text>
      <Ionicons name='notifications' size={25} onPress={navi} style={styles.icon}/>
    </View>
    
  );
};

export default MainHeader
