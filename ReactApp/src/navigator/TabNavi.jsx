import { Text, Platform, View, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import HistoryScreen from '../screen/HistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';
import SplitScreen from '../screen/SplitScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'
import FriendScreen from '../screen/FriendScreen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import React, { useState } from 'react';
import Modal from "react-native-modal";
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


global.Buffer = require('buffer').Buffer;

// Thanks for watching
const Tab = createBottomTabNavigator();

const TabNavi = ({ navigation, route}) => {
  const [state, setstate] = useState(false)

  const { theme } = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const styles = {
    tabBarStyle: {
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: ActiveColor.background,
    },

    page: {
      alignContent: 'center',
      justifyContent: 'center',
      flex: 1
    },

    ScanButton: {
      height: 30
    },

    modalview: {
      backgroundColor: "white",
      paddingHorizontal: 20,
      borderRadius: 15,
      paddingBottom: 23,
      paddingTop: 15
    },

    titleLabel: {
      fontSize: 17,
      color: '#B9B9B9',
      fontWeight: 'bold',
      // margin:7,
      // textAlign:"center"
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: 'white',
      borderRadius: 8,
      marginTop: 15,
      marginBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
    },

    rowLabel: {
      fontSize: 11,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#B9B9B9',
      marginTop: 3
    },

    buttons: {
      backgroundColor: "#DCE1F0",
      width: 70,
      height: 54,
      borderRadius: 5,
      alignContent: 'center',
      justifyContent: 'center'
      // marginTop: 10 
    }
  }
  
  const AccessCamera = async () => {
    const url = 'https://app.nanonets.com/api/v2/OCR/Model/c793292e-86cd-45ff-9545-58e487768d51/LabelFile/?async=false';
  
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )
  
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera({ mediaType: 'photo', quality: 1 }, (res) => {
        if (res.didCancel) {
          console.log("User Cancel")
        } else if (res.errorCode) {
          console.log(res.errorCode)
        } else {
          const formData = new FormData();
          formData.append('file', {
            uri: res.assets[0].uri,
            type: res.assets[0].type, // adjust the type according to your image format
            name: res.assets[0].fileName, // you can adjust the filename as well
          });
          console.log(res)
  
          try {
            const response = fetch(url, {
              method: 'POST',
              body: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Basic ' + Buffer.from('eeb6b933-0a11-11ef-a76e-da0c4b140285' + ':').toString('base64')
              },
            });
  
            const data = response.json();
  
            const navigation = useNavigation();
            console.log(data);
            navigation.navigate("AfterSpilt");
            setstate(false);
  
          } catch (error) {
            console.error('Error:', error);
          }
        }
      })
    } else {
      console.log("NO PERMISSION")
    }
    navigation.navigate("AfterSpilt");
  }

  const AcessGallery = async (x) => {
    const url = 'https://app.nanonets.com/api/v2/OCR/Model/c793292e-86cd-45ff-9545-58e487768d51/LabelFile/?async=false';

    const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 })
    const formData = new FormData();
    formData.append('file', {
      uri: result.assets[0].uri,
      type: result.assets[0].type, // adjust the type according to your image format
      name: result.assets[0].fileName, // you can adjust the filename as well
    });
    console.log(result)

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Basic ' + Buffer.from('eeb6b933-0a11-11ef-a76e-da0c4b140285' + ':').toString('base64')
        },
      });

      const data = await response.json();
      console.log(data);

      console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

      const predictions = data.result[0].prediction;

      predictions.forEach(prediction => {
        console.log(prediction);
      });
      

      console.log("INI WOI")
      navigation.navigate("AfterSpilt", {Info: predictions, UserInfo: x})
      setstate(false);

    } catch (error) {
      console.error('Error:', error);
    }
  }


  const [userinfo, setuser] = useState()
  React.useEffect(()=>{
    if(route.params != undefined){
      setuser(route.params.data.user)
      
    }
  })
  // console.log("simpan")
  // console.log(userinfo)
  return (
    <Tab.Navigator style={{ backgroundColor: '#000000' }} screenOptions={({route}) => ({ headerShown: false, tabBarHideOnKeyboard: true, tabBarShowLabel: false, tabBarStyle: styles.tabBarStyle })}>
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        initialParams={userinfo}
        options={{
          tabBarLabel: ({ focused, route }) =>
            focused ? getDataForScreen(route).tabBarLabel : null, // Conditionally render label  
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name='home' size={27} color={focused ? ActiveColor.iconOnClick : ActiveColor.iconRest} />
                <Text style={{ fontSize: 12, color: ActiveColor.text, marginTop: 3 }}>Home</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        initialParams={userinfo}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome6 name='receipt' size={24} color={focused ? ActiveColor.iconOnClick : ActiveColor.iconRest} />
                <Text style={{ fontSize: 12, color: ActiveColor.text, marginTop: 5 }}>History</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Split"
        component={SplitScreen}
        options={{
          tabBarButton: () => {
            return (
              <View>
                <View style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: ActiveColor.scan,
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30,
                  elevation: 10
                }}>
                  <TouchableOpacity
                    style={{
                      // backgroundColor:"#DCE1F0",
                      width: 60,
                      height: 60,
                      borderRadius: 5,
                      alignContent: 'center',
                      justifyContent: 'center'
                    }}
                    onPress={() => setstate(true)}
                  >
                    <MaterialCommunityIcons style={{ alignSelf: 'center', justifyContent: 'center' }} name='line-scan' size={37} color={"#FFFFFF"} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                  <Modal isVisible={state} onBackdropPress={() => setstate(false)} >
                    <View style={styles.modalview}>

                      <Text style={{
                        fontSize: 17,
                        color: '#B9B9B9',
                        fontWeight: 'bold',
                        margin: 7,
                        marginBottom: 20,
                        textAlign: "center"
                      }}>What would you like to choose?</Text>

                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        marginTop: 15,
                        marginBottom: 10,
                        paddingLeft: 12,
                        paddingRight: 12,
                      }}>
                        <View style={{ alignContent: 'center' }}>
                          <TouchableOpacity style={{
                            backgroundColor: "#DCE1F0",
                            width: 80,
                            height: 60,
                            borderRadius: 5,
                            alignContent: 'center',
                            justifyContent: 'center'
                          }} onPress={() => AcessGallery(userinfo)}>
                            <MaterialCommunityIcons name='image-multiple-outline' size={45} color={"#33363E"} style={{ alignSelf: 'center' }} />
                          </TouchableOpacity>
                          <Text style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#B9B9B9',
                            marginTop: 7
                          }}>Gallery</Text>
                        </View>

                        <View style={{ alignContent: 'center', marginLeft: 80 }}>
                          <TouchableOpacity style={{
                            backgroundColor: "#DCE1F0",
                            width: 80,
                            height: 60,
                            borderRadius: 5,
                            alignContent: 'center',
                            justifyContent: 'center'
                          }} onPress={AccessCamera}>
                            <MaterialCommunityIcons name='camera' size={50} color={"#33363E"} style={{ alignSelf: 'center' }} />
                          </TouchableOpacity>
                          <Text style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: '#B9B9B9',
                            marginTop: 7,
                          }}>Camera</Text>
                        </View>

                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendScreen}
        initialParams={userinfo}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5 name='users' size={24} color={focused ? ActiveColor.iconOnClick : ActiveColor.iconRest} />
                <Text style={{ fontSize: 12, color: ActiveColor.text, marginTop: 5 }}>Friends</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        initialParams={userinfo}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name='account-circle' size={30} color={focused ? ActiveColor.iconOnClick : ActiveColor.iconRest} />
                <Text style={{ fontSize: 12, color: ActiveColor.text }}>Account</Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavi