import React from 'react'
import { useState } from 'react'
import { StatusBar, StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavi from './src/navigator/TabNavi'
import NotificationScreen from './src/screen/NotificationScreen'
import ViewDetailScreen from './src/screen/ViewDetailScreen'
import LoginScreen from './src/screen/LoginScreen'
import RegisterScreen from './src/screen/RegisterScreen'
import TestScreen from './src/screen/Test'
import { ThemeContext } from './src/context/ThemeContext'
import HomeScreen from './src/screen/HomeScreen'
import ViewHistoryDetailScreen from './src/screen/ViewHistoryDetailScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = useState({mode : "dark"})

  const updateTheme = (newTheme) => {
    let mode;
    if(!newTheme){
      mode = (theme.mode === "dark"? "light" : "dark");
      newTheme={mode}
    }
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, updateTheme}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>

          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>
          <Stack.Screen name='Test' component={TestScreen}/>

          <Stack.Screen name='BottomTab' component={TabNavi}/>
          <Stack.Screen name='Notification' component={NotificationScreen}/>
          <Stack.Screen name='Details' component={ViewDetailScreen}/>
          <Stack.Screen name='HistoryDetails' component={ViewHistoryDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}

export default App