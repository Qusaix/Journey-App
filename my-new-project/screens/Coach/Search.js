import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createStackNavigator , createAppContainer } from 'react-navigation'

//import console = require('console');

 class Search extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Email:"",
       Password:"",
       Bio:"",
       Experence:""
     }
   }
   
  sendUserInfo(){
    fetch('https://quiet-beyond-30221.herokuapp.com/registerCoach', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()})
  .then((data)=>{console.warn("This is the data ",data)})
  //.catch((err)=>console.warn(err))
  .done()
}
    render() {
      return (
        <View>
         <Text>Soon</Text>
          </View>
 )}


};

export default Search;
  