import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const FriendBox = () => {
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
            </View>
            <View style={{flex:1}}>
              <Text style={styles.text}>Nama</Text>
              <Text style={styles.text}>No.Telp</Text>
            </View>
            <TouchableOpacity 
              onPress={() => Alert.alert("Reminder have been sent")}
              style={styles.icon}>
              <MaterialIcons name='notifications-active' size={30} />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FriendBox

const styles = StyleSheet.create({
  box:{
    backgroundColor:'#FFFFFF',
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
    color:'#6C757D',
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
    marginRight:8
  }
})