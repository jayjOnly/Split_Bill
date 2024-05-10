import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';


const HomeScreen = ({navigation}) => {
  
  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

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
    fetch('http://172.16.0.198:8080/activityhistory') //ganti IPnya sama kek IP PC anda
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
      {/* <StatusBar backgroundColor={'#FFFFFF'} /> */}
      <View style={styles.container}>
        <View>
          <MainHeader title="Udin" navi={() => navigation.navigate("Notification")}/>
        </View>

        <ScrollView>
          <View style={styles.activity}>
            <Text style={styles.title}>Activity</Text>

            <View>
            {data.map((d,i) =>
              <ActivityBox key={i} navi={() => navigation.navigate("Details")} name={d.Nama} nominal={d.Nominal} date={d.Tanggal}/>
            )}
            </View>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen
