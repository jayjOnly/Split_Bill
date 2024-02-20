import React from 'react';
import { StyleSheet,Text, Button, View, ImageComponent, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import IMAGES from '../images';
import SplitScreen from '../screen/SplitScreen';

const MainHeader = ({title}) => {
  return (
    <View style={[styles.cointainer]}>
      <Text style={styles.title}>Welcome {title}!</Text>
      <Ionicons name='notifications' size={25} onPress={() => {}} color='#FFFFFF'/>
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
        fontWeight:'bold',
        color:'#FFFFFF'
    }
})

export default MainHeader
