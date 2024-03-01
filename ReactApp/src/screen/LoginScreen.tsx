import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


import InputField from '../components/InputField'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


// import GoogleSVG from '../assets/images/google.svg'
// import FacebookSVG from '../assets/images/facebook.svg';
// import TwitterSVG from '../assets/images/twitter.svg';

const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
       <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        {/* <View style={{alignItems: 'center'}}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View> */}
        
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialCommunityIcons name='at' size={20} color={"#666"} style={{marginRight: 5}} />    
          }
          inputType={'any'}
          keyboardType="email-address"
          fieldButtonLabel={''}
          fieldButtonFunction={'any'}
        />

      <InputField
          label={'Password'}
          icon={
            <MaterialCommunityIcons name='lock-outline' size={20} color={"#666"} style={{marginRight: 5}} />
          }
          inputType="password"
          keyboardType={'ascii-capable'}
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <TouchableOpacity
      onPress={()=> navigation.navigate("BottomTab")}
      style={{
        backgroundColor: '#7B2FF8',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        Login
      </Text>
    </TouchableOpacity>

        {/* <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity 
           onPress={() => navigation.navigate('Register')}
          >
            <Text style={{color: '#7B2FF8', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})