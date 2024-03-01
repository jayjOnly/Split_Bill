import React from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';
import HistoryBox from '../components/HistoryBox';

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.header}>History</Text>
        <ScrollView>
          <View style={styles.activity}>
            <HistoryBox />
            <HistoryBox />
            <HistoryBox />
            <HistoryBox />
            <HistoryBox />
            <HistoryBox />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize:20,
    color:'#0F0F0F',
    fontFamily:'Montserrat-Regular',
    marginLeft:25,
    marginBottom:10,
    marginTop:15
  }, 
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
  activity:{
    backgroundColor:'#EEEEEE',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25,
    marginHorizontal:15
  }
})

export default HomeScreen
