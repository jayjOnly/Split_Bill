import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const HistoryBoz = ({navi}) => {
  return (
    <View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={navi}
          style={styles.Button}>
          <Text style={styles.text}>Judul | DD-MM-YY</Text>
          <Text style={styles.bill}>Total Bill</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default HistoryBoz

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
    padding:10
  },
  text:{
    fontWeight:'bold',
    marginBottom:5,
    fontSize:20,
    textAlign:'left',
    color:'#000000'
  },
  bill:{
    fontWeight:'400',
    fontSize:20,
    textAlign:'left',
    color:'#000000'
  },
  Button:{
    borderRadius:20
  }
})