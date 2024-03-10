import React from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';
import ActivityBox from '../components/ActivityBox';
import HistoryBox from '../components/HistoryBox';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const HistoryScreen = ({navigation}) => {
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
      paddingVertical:15,
      borderRadius:25,
      marginHorizontal:15
    }
  })

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

export default HistoryScreen
