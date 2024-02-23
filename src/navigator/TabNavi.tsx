import {  Text, Platform,  View, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SplitScreen from '../screen/SplitScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'
import FriendScreen from '../screen/FriendScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from 'react';



const AccessCamera = async () =>{
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  )

  if(granted === PermissionsAndroid.RESULTS.GRANTED){
    const result = await launchCamera({mediaType: 'photo', quality: 1}, (res) => {
      if(res.didCancel){
        console.log("User Cancel")
      }else if(res.errorCode){
        console.log(res.errorCode)
      }else{
        console.log(res.assets)
      }
    })
  }else{
    console.log("NO PERMISSION")
  } 
}

// Thanks for watching
const Tab =createBottomTabNavigator();

function TabNavi() {
  const [navistate , setnavistate] = useState(true)
  return (
       <Tab.Navigator screenOptions={{headerShown:false, tabBarHideOnKeyboard:true, tabBarShowLabel:false, tabBarStyle: styles.tabBarStyle}}>
          <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name='home' size={27} color={focused ? "#16247d": "#111"}/>
                  <Text style={{fontSize: 12, color: "#16247d",marginTop:3}}>Home</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="History" 
          component={HistoryScreen} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <FontAwesome6 name='receipt' size={24} color={focused ? "#16247d": "#111"}/>
                  <Text style={{fontSize: 12, color: "#16247d", marginTop:5}}>History</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Split" 
          component={SplitScreen} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#23A83F",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <MaterialCommunityIcons name='line-scan' size={30} color={focused ? "#FFFFFF": "#FFFFFF"} />
                </View>
              )
            },

            // tabBarButton: () => (<TouchableOpacity onPress={()=>setnavistate(true)}></TouchableOpacity>)
           }}
          />
          <Tab.Screen
           name="Friends" 
           component={FriendScreen}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <FontAwesome5 name='users' size={24} color={focused ? "#16247d": "#111"}/>
                  <Text style={{fontSize: 12, color: "#16247d",marginTop:5}}>Friends</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <MaterialCommunityIcons name='account-circle' size={30} color={focused ? "#16247d": "#111"}/>
                  <Text style={{fontSize: 12, color: "#16247d",}}>Account</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
)
}

const styles = {
  tabBarStyle:{
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  }
}

export default TabNavi