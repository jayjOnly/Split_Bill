import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavi from './src/navigator/TabNavi'
import NotificationScreen from './src/screen/NotificationScreen'
import ViewDetailScreen from './src/screen/ViewDetailScreen'
import LoginScreen from './src/screen/LoginScreen'
import RegisterScreen from './src/screen/RegisterScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor={'#FFFFFF'} /> */}
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        
        
        <Stack.Screen name='BottomTab' component={TabNavi}/>
        <Stack.Screen name='Notification' component={NotificationScreen}/>
        <Stack.Screen name='Details' component={ViewDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App