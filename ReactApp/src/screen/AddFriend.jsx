import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../config/theme';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddFriend = ({navigation, route}) => {
    const {theme} = useContext(ThemeContext);
    const [number, setNumber] = useState("");
    const [user, setUser] = useState([])
    const [friend, setFriend] = useState([])

     
    const handleAddFriend = async (phoneNumber) => {
        fetch('http://192.168.241.60:1212/friendlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phoneNumber, // Existing data
                currUser: user/* Your logic to retrieve and send currUser value */
              })
        })
        .then(response => {
            if (response.ok) {
                console.log('Registration successful');
                navigation.navigate("BottomTab")
            } else {
                console.log('Registration failed');
            }
        })
        .catch(error => console.error('Error:', error));
    };
      
        // ... (rest of your component code)
      

    let ActiveColor = colors[theme.mode]
    if(route.params != undefined){
        useEffect(()=>{
            console.log(route.params)
            setUser(route.params.datas.users)
            setFriend(route.params.datas.friends)
            console.log(friend)
            console.log(user)
        })
        
    }

    const formatNumber = (number) => {
        if (number.length === 12) {
          return number.slice(0, 4) + ' ' + number.slice(4, 8) + ' ' + number.slice(8);
        } else if (number.length === 11) {
          return number.slice(0, 3) + ' ' + number.slice(3, 7) + ' ' + number.slice(7);
        } else {
          return number; // Do nothing for invalid lengths or shorter strings
        }
      };

    
    const addFunction = (number) => {
        let foundDuplicate = false; // Initialize a flag
    
        friend.forEach(x => {
            if (x.phonenumber === formatNumber(number)) {
                console.log("Double");
                foundDuplicate = true; // Set the flag to indicate a duplicate
                return; // Exit the loop early if a duplicate is found
            }
        });
    
        return !foundDuplicate; // Return the opposite of the flag
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
                        alignSelf: 'center'
                    }}>
                    Input Friend's Number
                    </Text>
                    
                    <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 25,
                    }}>
                    <TextInput
                        placeholder={'Input Number'}
                        keyboardType={'number-pad'}
                        style={{flex: 1, paddingVertical: 0, color:"white", color: ActiveColor.text}}
                        onChangeText={x=>setNumber(x)}
                    />
                    </View>
                    
                   
                
                    <TouchableOpacity
                    onPress={() => {
                        if(number != undefined){
                            // console.log(formatNumber(number))
                            // friend.forEach(x => {
                            //     console.log(x)
                            // })
                            // console.log(addFunction(number))
                            console.log(formatNumber(number))
                            console.log(user.id)
                            if(addFunction(number)){
                                console.log("yes")
                                handleAddFriend(formatNumber(number))
                            }
                            
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
                        Add Friend
                    </Text>
                    </TouchableOpacity>

                    
                </View>
            </SafeAreaView>
        </SafeAreaView>
  )
}

export default AddFriend

const styles = StyleSheet.create({})