import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import InputField from '../components/InputField'
import FeatherIcon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

// const theme = {mode: "dark"}


const HomeScreen = ({navigation}) => {
  
    const {theme, updateTheme} = useContext(ThemeContext);
    let ActiveColor = colors[theme.mode]
  
    const [isActive, setIsActive] = useState(theme.mode === "dark");
  
    const handleSwitch = () => {
      updateTheme();
      setIsActive((previousState) => !previousState)
    }
  
    const styles = StyleSheet.create({
      container: {
        padding: 0,
        flexGrow: 0.3,
        flexShrink: 1.2,
        flexBasis: 0,
      },
      /** Profile */
      profile: {
        marginTop: 30,
        padding: 30,
        backgroundColor: ActiveColor.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileAvatarWrapper: {
        position: 'relative',
      },
      profileAvatar: {
        width: 72,
        height: 72,
        borderRadius: 9999,
      },
      profileAction: {
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: '#007bff',
      },
    })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ActiveColor.background}}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon
                    color="#fff"
                    name="edit-3"
                    size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 25, marginTop: 20}}>
      <InputField
          label={'Name'}
          icon={
            <AntDesign name='user' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />
          }
          inputType="any"
          keyboardType={'default'}
          fieldButtonLabel={"Edit"}
          fieldButtonFunction={() => {}}
        />
        <InputField
          label={'Email'}
          icon={
            <MaterialCommunityIcons name='at' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />    
          }
          inputType={'any'}
          keyboardType="email-address"
          fieldButtonLabel={'Edit'}
          fieldButtonFunction={'any'}
        />
        <InputField
          label={'Phone Number'}
          icon={
            <AntDesign name='phone' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />    
          }
          inputType={'any'}
          keyboardType="numeric"
          fieldButtonLabel={'Edit'}
          fieldButtonFunction={'any'}
        />
      
        </View>
    </SafeAreaView>
  );
};




export default HomeScreen
