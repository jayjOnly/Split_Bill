import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const NotificationScreen = ({navigation}: {navigation: any}) => {
  return (
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
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
    screen:{
        flexDirection:'row',
        margin:10,
        flex:1,
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
    }
})