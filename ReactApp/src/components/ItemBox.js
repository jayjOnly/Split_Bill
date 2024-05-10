import { View, TextInput, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../config/theme';

const ItemBox = ({ItemName, Qty, Price}) => {
    const {theme} = useContext(ThemeContext);
    let ActiveColor = colors[theme.mode]
  
    const styles = StyleSheet.create({
      box:{
        marginBottom:10,
        marginTop:10,
        padding:5,
        flexDirection:'row',
        backgroundColor:ActiveColor.background2,
        borderRadius:20,
        marginHorizontal:15
      },
      textItem:{
        fontFamily:'Montserrat-Regular',
        color: ActiveColor.text,
        marginLeft:20,
        fontSize:15,
        textAlign:'left',
        flex:1
      },
      textqty:{
        fontFamily:'Montserrat-Regular',
        color: ActiveColor.text,
        fontSize:15,
        flex:1,
        textAlign:'center'
      },
      textprice:{
        fontFamily:'Montserrat-Regular',
        color: ActiveColor.text,
        textAlign:'right',
        fontSize:15,
        flex:1,
        marginRight:20
      }
    })
    
    return (
        <View style={styles.box}>
            <TextInput 
                style={styles.textItem}
                placeholder='Item Name'
                value={ItemName}
            />
            <TextInput 
                style={styles.textqty}
                placeholder='Quantity'
                keyboardType='numeric'
                value={Qty}
            />
            <TextInput 
                style={styles.textprice}
                placeholder='Price'
                keyboardType='decimal-pad'
                value={Price}
            />
        </View>
    )
}

export default ItemBox