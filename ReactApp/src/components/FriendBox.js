import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const FriendBox = ({name, telephone, ketikaClick, bentuk}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    box:{
      backgroundColor:ActiveColor.background,
      borderRadius:20,
      marginBottom:20,
      padding:15,
      flexDirection:'row',
      alignItems:'center',
      flex:1
    },
    text:{
      marginBottom:5,
      fontFamily:'Montserrat-Regular',
      color:ActiveColor.text,
      fontSize:15
    },  
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAvatar: {
      width: 50,
      height: 50,
      borderRadius: 9999,
      marginRight:20
    },
    icon:{
      marginRight:4,
      color: ActiveColor.icon
    }
  })

  
  return (
    <View>
        <TouchableOpacity style={bentuk != undefined ? bentuk : styles.box} onPress={ketikaClick}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.text}>{telephone}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => Alert.alert("Reminder have been sent")}
              style={styles.icon}>
              <MaterialIcons name='notifications-active' size={30} style={styles.icon}/>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

export default FriendBox