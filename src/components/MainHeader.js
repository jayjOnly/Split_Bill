import React from 'react';
import { StyleSheet,Text, Button, View, ImageComponent, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const MainHeader = ({title, navi}) => {
  return (
    <View style={[styles.cointainer]}>
      <Text style={styles.title}>Welcome {title}!</Text>
      <Ionicons name='notifications' size={25} onPress={navi} color='#ACACAC'/>
    </View>
    
  );
};

const styles = StyleSheet.create({
    cointainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"flex-start",
      paddingHorizontal: 15,
      paddingVertical:15,
    },
    title:{
        fontSize:20,
        fontWeight:'300',
        color:'#0F0F0F'
    }
})

export default MainHeader
