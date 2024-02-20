import React from 'react';
import { StyleSheet,Text, Button, View, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainHeader from '../components/MainHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View>
          <MainHeader title="Udin"/>
        </View>

        <ScrollView>
          <View style={styles.activity}>
            <Text style={styles.title}>Activity</Text>

            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
            <View style={styles.box}>
              <Text>Judul 1</Text>
              <Text>Rp.100.000</Text>
              <Button title='Lihat Detail'/>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box:{
    flex:1,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:20,
    padding:15
  },
  container:{
    backgroundColor:'#000000',
    paddingBottom:40
  },
  title:{
    fontSize:25,
    color:'#FFFFFF',
    marginBottom:10
  },
  activity:{
    backgroundColor:'#808080',
    paddingHorizontal: 15,
    paddingVertical:15,
    borderRadius:25
  }
})

export default HomeScreen
