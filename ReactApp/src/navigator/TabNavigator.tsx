import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/HomeScreen'
import HistoryScreen from '../screen/HistoryScreen'
import ProfileScreen from '../screen/ProfileScreen'
import { Image, StyleSheet, Text, View, Animated } from 'react-native'
import IMAGES from '../images'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{headerShown:false, tabBarHideOnKeyboard:true, tabBarShowLabel:false, tabBarStyle:styles.tabBarStyle}}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: ({focused}) => <Image source={IMAGES.HOME} style={{height:25, width:25, tintColor: focused? "#000000" : "#D3D3D3"} }/> }}></Tab.Screen>
      <Tab.Screen name='History' component={HistoryScreen} options={{ tabBarIcon: ({focused}) => <Image source={IMAGES.HISTORY} style={{height:25, width:25, tintColor: focused? "#000000" : "#D3D3D3"} }/> }}></Tab.Screen>
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ tabBarIcon: ({focused}) => <Image source={IMAGES.PROFILE} style={{height:25, width:25, tintColor: focused? "#000000" : "#D3D3D3"} }/> }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle:{
    height:50,
    position:'absolute',
  }
})

export default TabNavigator