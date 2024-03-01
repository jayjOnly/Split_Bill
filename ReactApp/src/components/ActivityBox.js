import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const ActivityBoz = ({navi}) => {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>Judul | DD-MM-YY</Text>
        <Text style={styles.harga}>Rp. 100.000</Text>
        <TouchableOpacity
            onPress={navi}
            style={styles.Button}>

            <Text style={styles.ButtonLabel}>View Detail</Text>
        </TouchableOpacity>
    </View>
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
    marginBottom:20,
    fontSize:25,
    fontFamily:'Montserrat-Regular',
    color:'#000000'
  },
  ButtonLabel:{
    fontSize: 17,
    color: '#FFFFFF',
    fontFamily:'Montserrat-Regular',
    margin:7,
    padding:2
  },
  Button:{
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius:15
  }
})