import React from 'react'
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HistoryBox from '../components/HistoryBox';

const HistoryScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.history}>
            <Text style={styles.title}>History</Text>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")} />
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
            <HistoryBox navi={() => navigation.navigate("History Details")}/>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    paddingBottom:40
  },
  title:{
    fontSize:20,
    color:'#0F0F0F',
    marginBottom:10,
    fontWeight:'bold'
  },
  history:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25,
    marginHorizontal:15
  }
})

export default HistoryScreen