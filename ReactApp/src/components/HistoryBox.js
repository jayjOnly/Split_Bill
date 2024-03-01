import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const ActivityBoz = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.box}>
          <Text style={styles.text}>Judul | DD-MM-YY</Text>
          <Text style={styles.harga}>Rp. 100.000</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ActivityBoz

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
    padding:15
  },
  text:{
    marginBottom:5,
    fontFamily:'Montserrat-Regular',
    color:'#6C757D'
  },
  harga:{
    marginBottom:10,
    fontSize:25,
    fontFamily:'Montserrat-Regular',
    color:'#000000'
  },
})