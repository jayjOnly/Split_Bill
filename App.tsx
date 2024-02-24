import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavi from './src/navigator/TabNavi'
import NotificationScreen from './src/screen/NotificationScreen'
import ViewDetailScreen from './src/screen/ViewDetailScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='BottomTab' component={TabNavi}/>
        <Stack.Screen name='Notification' component={NotificationScreen}/>
        <Stack.Screen name='Details' component={ViewDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App