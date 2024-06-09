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
import TermsNConditionScreen from './src/screen/TermsNCondScreen'
import AccountSettingScreen from './src/screen/AccountSettingScreen'
import AfterSpilt from './src/screen/AfterSpilt'
import AssignItem from './src/screen/AssignItem'
import FinalConfirm from './src/screen/FinalConfirm'
import AddFriend from './src/screen/AddFriend'
import SelectFriend from './src/screen/SelectFriend'
import ChooseFriend from './src/screen/ChooseFriend'
import ChooseType from './src/screen/ChooseType'
import FinalConfirm2 from './src/screen/FinalConfirm2'

const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = useState({mode : "light"})
  const [id, setID] = useState(0)
  const [usersname, setUsersname] = useState("")

  const updateTheme = (newTheme) => {
    let mode;
    if(!newTheme){
      mode = (theme.mode === "dark"? "light" : "dark");
      newTheme={mode}
    }
    setTheme(newTheme);
  }

  const updateID = (x) => {
    setID(x);
  }

  const updateUsersname = (y) => {
    setUsersname(y)
  }

  return (
    <ThemeContext.Provider value={{theme, updateTheme, id, updateID, usersname, updateUsersname}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>
          <Stack.Screen name='Test' component={TestScreen}/>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='BottomTab' component={TabNavi}/>
          <Stack.Screen name='Notification' component={NotificationScreen}/>
          <Stack.Screen name='Details' component={ViewDetailScreen}/>
          <Stack.Screen name='HistoryDetails' component={ViewHistoryDetailScreen}/>
          <Stack.Screen name='TOS' component={TermsNConditionScreen}/>
          <Stack.Screen name='AccountSetting' component={AccountSettingScreen}/>
          <Stack.Screen name='AfterSpilt' component={AfterSpilt}/>
          <Stack.Screen name='AssignItem' component={AssignItem}/>
          <Stack.Screen name='FinalConfirm' component={FinalConfirm}/>
          <Stack.Screen name='AddFriend' component={AddFriend}/>
          <Stack.Screen name='ChooseFriend' component={ChooseFriend}/>
          <Stack.Screen name='ChooseType' component={ChooseType}/>
          <Stack.Screen name='FinalConfirm2' component={FinalConfirm2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  )
}

export default App