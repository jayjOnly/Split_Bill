import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/theme'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const NotificationBox2 = () => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode];

  const styles = StyleSheet.create({
    box:{
      backgroundColor:ActiveColor.background,
      borderRadius:20,
      padding:15,
      flexDirection:'row',
      alignItems:'center',
      flex:1,
      marginHorizontal:10,
      marginTop:10
    },
    text:{
      marginBottom:5,
      fontFamily:'Montserrat-Light',
      color:ActiveColor.text,
      fontSize:15,
    },  
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAvatar: {
      width: 50,
      height: 50,
      borderRadius: 9999,
      marginRight:20
    }
  })

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.box}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />
                {/* <AntDesign name='exclamationcircle' size={40} /> */}

            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}>Conor has added you as a friend</Text>
              {/* <Text style={styles.text}>No.Telp</Text> */}
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationBox2