import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

const RegisterScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setName] = useState();
  const [cpassword, setCPassword] = useState();

  const {theme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const handleRegister = () => {
    fetch('http://192.168.3.60:2525/usertable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    })
    .then(response => {
      if (response.ok) {
        console.log('Registration successful');
        navigation.navigate("Login")
      } else {
        console.log('Registration failed');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: ActiveColor.background}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: ActiveColor.text,
            marginBottom: 40,
            marginTop:150
          }}>
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialCommunityIcons name='account-outline' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />    
          <TextInput
            placeholder={'Full Name'}
            keyboardType={"ascii-capable"}
            style={{flex: 1, paddingVertical: 0, color:"white", color: ActiveColor.text}}
            onChangeText={x=>setName(x)}
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
          <MaterialCommunityIcons name='at' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />    
          <TextInput
            placeholder={'Email ID'}
            keyboardType={"email-address"}
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
            onChangeText={x=>setPassword(x)}
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
          <MaterialCommunityIcons name='lock-check-outline' size={20} color={ActiveColor.iconOnClick} style={{marginRight: 5}} />         
          <TextInput
            placeholder={'Confirm Password'}
            keyboardType={'ascii-capable'}
            style={{flex: 1, paddingVertical: 0, color:"white", color: ActiveColor.text}}
            secureTextEntry={true}
            onChangeText={x=>setCPassword(x)}
        />
         
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color: ActiveColor.button , fontWeight: '700'}}></Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.log(username, email, password, cpassword);
            if(cpassword == password){
              handleRegister();
            }else{
              console.log("Wrong password confirmation")
            }
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
            Register
          </Text>
        </TouchableOpacity>

        <View style={{alignSelf: 'center'}}>
          <Text style={{color: ActiveColor.text}}>By signing up you agree to our</Text>
        </View>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity 
          // onPress={() => navigation.goBack()}
          >
            <Text style={{color: ActiveColor.button, fontWeight: '700'}}>Term of Use</Text>
          </TouchableOpacity>
          <Text style={{color: ActiveColor.text}}> and </Text>
          <TouchableOpacity 
          // onPress={() => navigation.goBack()}
          >
            <Text style={{color: ActiveColor.button, fontWeight: '700'}}> Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})