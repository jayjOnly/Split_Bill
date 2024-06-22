import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';



const LoginScreen = ({navigation}) => {
  const {theme, updateID, updateUsersname} = useContext(ThemeContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let ActiveColor = colors[theme.mode]

  const handleLogin = async () => {
    // Make a POST request to your backend server
    const response = await fetch('http://192.168.3.60:5555/usertable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    if (response.ok) {
      console.log('Login successful');
      console.log('User:', data); // Log user data
      updateID(data.user.id)
      updateUsersname(data.user.username)
      navigation.navigate("BottomTab", {data});
      setPassword('');
      setEmail('');
    } else {
      console.log('Login failed');
    }
  };
  
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center',backgroundColor: ActiveColor.background }}>
       <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: ActiveColor.text,
            marginBottom: 30,
          }}>
          login
        </Text>
        
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialCommunityIcons name='at' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />    
          <TextInput
            placeholder={'Email ID'}
            keyboardType={"email-address"}
            value={email}
            style={{flex: 1, paddingVertical: 0, color:"white", color: ActiveColor.text}}
            onChangeText={x=>setEmail(x)}
          />
         
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color: ActiveColor.button , fontWeight: '700'}}></Text>
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialCommunityIcons name='lock-outline' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />
          <TextInput
            placeholder={'Password'}
            keyboardType={'ascii-capable'}
            style={{flex: 1, paddingVertical: 0, color:"white", color: ActiveColor.text}}
            secureTextEntry={true}
            value={password}
            onChangeText={x=>setPassword(x)}
        />

          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color: ActiveColor.button , fontWeight: '700'}}>Forgot?</Text>
          </TouchableOpacity>
        </View>
     
        <TouchableOpacity
          onPress={() => {
            console.log(email, password);
            handleLogin();
          }}
          style={{
            backgroundColor: ActiveColor.button,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: ActiveColor.intext,
            }}>
            Login
          </Text>
        </TouchableOpacity>

      
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
            color: ActiveColor.text
          }}>
          <Text style={{color:ActiveColor.text}}>New to the app?</Text>
          <TouchableOpacity 
           onPress={() => navigation.navigate('Register')}
          >
            <Text style={{color: ActiveColor.button, fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})