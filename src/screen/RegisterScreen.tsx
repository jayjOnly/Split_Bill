import React, {useState} from 'react';
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
import InputField from '../components/InputField';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../components/CustomButton';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  // console.log(props)
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 40,
            marginTop:150
          }}>
          Register
        </Text>

        {/* <View
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

        {/* <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, register with email ...
        </Text> */}

        <InputField
          label={'Full Name'}
          icon={
            <MaterialCommunityIcons name='image-multiple-outline' size={20} color={"#666"} style={{marginRight: 5}} />    
          }
          inputType={'name'}
          keyboardType="any"
          fieldButtonLabel={''}
          fieldButtonFunction={'any'}
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialCommunityIcons name='image-multiple-outline' size={20} color={"#666"} style={{marginRight: 5}} />    

          }
          inputType={'any'}
          keyboardType="email-address"
          fieldButtonLabel={''}
          fieldButtonFunction={'any'}
        />

        <InputField
          label={'Password'}
          icon={
            <MaterialCommunityIcons name='image-multiple-outline' size={20} color={"#666"} style={{marginRight: 5}} />    
          }
          inputType="password"
          keyboardType="any"
          fieldButtonLabel={''}
          fieldButtonFunction={'any'}
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <MaterialCommunityIcons name='image-multiple-outline' size={20} color={"#666"} style={{marginRight: 5}} />    
          }
          inputType="password"
          keyboardType="any"
          fieldButtonLabel={''}
          fieldButtonFunction={'any'}
        />

        {/* <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 30,
          }}>

          <MaterialCommunityIcons name='image-multiple-outline' size={20} color={"#666"} style={{marginRight: 5}} />    

          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
              {dobLabel}
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}

        <CustomButton label={'Register'} onPress={() => navigation.navigate("Login")} />

        <View style={{alignSelf: 'center',}}>
          <Text>By signing up you agree to our</Text>
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
            <Text style={{color: '#AD40AF', fontWeight: '700'}}>Term of Use</Text>
          </TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity 
          // onPress={() => navigation.goBack()}
          >
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})