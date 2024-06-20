import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import HistoryBox from '../components/HistoryBox';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const getUserData = async (userId) => {
  try {
    const response = await fetch(
      `http://172.16.0.29:1113/activitylist?users=${userId}`
    );
    
    if (!response.ok) {
      // console.log(response)
      throw new Error(`Error fetching data: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const HistoryScreen = ({navigation, route}) => {
  const[datas, getdatas] = useState([])
  React.useEffect(() => { 
    const fetchData = async (x) => {
      try {
        const data = await getUserData(x);
        getdatas(data);
        // console.log(data)
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, like displaying an error message
      }
    };
  
    if(route.params != undefined){ 
      fetchData(route.params.id)
    }
  }, [])

  console.log(datas)
  const newData = [];
  const seenGroup = {};

  const deepCopy = (obj) => {
    const copy = {};
    Object.entries(obj).forEach(([key, value]) => {
      copy[key] = typeof value === 'object' ? deepCopy(value) : value;
    });
    return copy;
  };

  for (const data of datas) {
    const groupId = data.groupID;
    if (!(groupId in seenGroup)) {
      seenGroup[groupId] = deepCopy(data);
      newData.push(seenGroup[groupId]);
    } else {
      seenGroup[groupId].itemPrice += data.itemPrice;
    }
  }

  console.log(newData)


  const [usersname, setusername] = useState()
  React.useEffect(() => {
    if(route.params != undefined){
      setusername(route.params.username)
    }
  })
  console.log(usersname) 

  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = StyleSheet.create({
    header:{
      fontSize:20,
      color: ActiveColor.text,
      fontFamily:'Montserrat-Regular',
      marginLeft:25,
      marginBottom:10,
      marginTop:15
    }, 
    container:{
      backgroundColor: ActiveColor.background,
      paddingBottom:40
    },
    activity:{
      backgroundColor: ActiveColor.box,
      paddingHorizontal: 15,
      paddingBottom:500,
      paddingVertical:15,
      borderRadius:25,
      marginHorizontal:15
    }
  })

  return (
    <SafeAreaView style={{flex:1}}>
      <View >
        <Text style={styles.header}>History</Text>
        <ScrollView>
          <View style={styles.activity}>
            {newData.map((d,i) =>

              <HistoryBox key={i} navi={() => navigation.navigate("HistoryDetails")} name={d.itemName} nominal={d.itemPrice} date={d.activityDate}/>
            )}
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen
