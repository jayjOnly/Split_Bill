import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screen/HomeScreen'
import DetailScreen from './src/screen/DetailScreen'
import SplitScreen from './src/screen/SplitScreen'
import TabNavi from './src/navigator/TabNavi'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tab' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Tab' component={TabNavi} options={{animation:'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen name='Split' component={SplitScreen} options={{animation:'slide_from_bottom'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App