import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const getUserData = async (userId) => {
  try {
    const response = await fetch(
      `http://172.16.1.241:1115/activitylist?users=${userId}`
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

const HomeScreen = ({navigation, route}) => {
  const {theme, id, usersname} = useContext(ThemeContext);
  console.log("THIS IS ID")
  console.log(id)
  let ActiveColor = colors[theme.mode]
  
  const[datas, getdatas] = useState([])
  React.useEffect(() => { 
    console.log("satu")
    const fetchData = async (x) => {
      try {
        const data = await getUserData(x);
        getdatas(data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, like displaying an error message
      }
    };

    fetchData(id)
    
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

  const styles = StyleSheet.create({
    container:{
      backgroundColor: ActiveColor.background,
      paddingBottom:40,
      flex:1
    },
    title:{
      fontSize:20,
      color: ActiveColor.text,
      marginBottom:10,
      fontFamily:'Montserrat-Regular'
    },
    activity:{
      backgroundColor: ActiveColor.box,
      paddingHorizontal: 15,
      paddingVertical:15,
      borderRadius:25,
      marginHorizontal:15
    }
  })

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://172.16.0.29:8080/activityhistory') //ganti IPnya sama kek IP PC anda
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View>
          <MainHeader title={usersname != undefined ? usersname : ""} navi={() => navigation.navigate("Notification")}/>
        </View>

        <ScrollView>
          <View style={styles.activity}>
            <Text style={styles.title}>Activity</Text>

            <View>
            {newData.map((d,i) =>
              <ActivityBox key={i} navi={() => navigation.navigate("Details")} name={d.username} nominal={d.itemPrice} date={d.activityDate}/>
            )}
            </View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen
