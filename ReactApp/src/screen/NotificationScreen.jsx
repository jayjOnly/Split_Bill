import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NotificationBox1 from '../components/NotificationBox1'
import NotificationBox2 from '../components/NotificationBox2'
import NotificationBox3 from '../components/NotificationBox3'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';


const NotificationScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    screen:{
      flexDirection:'row',
      justifyContent:'center',
    },
    page:{
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
    },
    list:{
      backgroundColor: ActiveColor.box,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderEndEndRadius:10,
      marginHorizontal:10,
      marginTop:20,
      paddingTop:4,
      marginBottom:50,
      paddingBottom:10
    },

  })

  return (    
    <View style={styles.page}>
      <View style={styles.screen}>
        <TouchableOpacity>
          <AntDesign 
              onPress={() => navigation.navigate('BottomTab') }
              name='left' 
              size={25} 
              style={styles.BackButton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
      </View>
      <ScrollView>
        <View style={styles.list}>
          <NotificationBox1 />
          <NotificationBox2 />
          <NotificationBox1 />
          <NotificationBox3 />
          <NotificationBox2 />
          <NotificationBox3 />
          <NotificationBox1 />
          <NotificationBox2 />
          <NotificationBox3 />
          <NotificationBox1 />  
        </View>
      </ScrollView>

    </View>
  )
}

export default NotificationScreen