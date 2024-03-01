import React from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';

const HomeScreen = ({navigation}: {navigation: any}) => {
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

            <ActivityBox navi={() => navigation.navigate("Details")}/>
            <ActivityBox navi={() => navigation.navigate("Details")} />
            <ActivityBox navi={() => navigation.navigate("Details")}/>
            <ActivityBox navi={() => navigation.navigate("Details")}/>
            <ActivityBox navi={() => navigation.navigate("Details")}/>
            <ActivityBox navi={() => navigation.navigate("Details")}/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
    padding:15
  },
  container:{
    backgroundColor:'#FFFFFF',
    paddingBottom:40
  },
  title:{
    fontSize:20,
    color:'#0F0F0F',
    marginBottom:10,
    fontFamily:'Montserrat-Regular'
  },
  activity:{
    backgroundColor:'#EEEEEE',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25,
    marginHorizontal:15
  }
})

export default HomeScreen
