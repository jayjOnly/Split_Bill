import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NotificationBox1 from '../components/NotificationBox1'
import NotificationBox2 from '../components/NotificationBox2'
import NotificationBox3 from '../components/NotificationBox3'


const NotificationScreen = ({navigation}: {navigation: any}) => {
  return (    
    <View>
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
      <ScrollView style={styles.list}>
        <NotificationBox1 />
        <NotificationBox2 />
        <NotificationBox1 />
        <NotificationBox3 />
        <NotificationBox2 />
        <NotificationBox3 />
        <NotificationBox1 />
      </ScrollView>

    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    screen:{
        flexDirection:'row',
        margin:10,
        justifyContent:'center'
    },
    BackButton:{
        marginLeft:10,
        marginTop:10
    },
    title:{
        textAlign:'center',
        flex:1,
        marginTop:10,
        fontSize:18,
        fontWeight:'700'
    },
    list:{
      backgroundColor:'#EEEEEE',
      paddingHorizontal: 15,
      paddingVertical:15,
      borderRadius:25,
      marginHorizontal:8
    },
})