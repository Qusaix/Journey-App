import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput
} from 'react-native';
import { createStackNavigator , createAppContainer } from 'react-navigation'

//import console = require('console');

 class RegCoach extends React.Component {
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
        <View
        style={{
          flex:1,
          alignContent:"center",
          alignItems:"center",
        }}
        >
          <View
          style={{
            width: 300,
            height: 400,
            backgroundColor:"#238aff",
           // marginLeft:90,
            marginTop:8+"%",
            borderRadius:10
          }}
          > 


                <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Name"
                //textContentType="password"
                //secureTextEntry={true}
                name={"Name"}
                onChangeText={(value)=>this.setState({Name:value})}
                //value = {this.state.Name}
                  />

<TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Eamil"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Email"}
                onChangeText={(value)=>this.setState({Email:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                name={"Password"}
                onChangeText={(value)=>this.setState({Password:value})}
                
                  />
                  <TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 80,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Bio"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Bio"}
                onChangeText={(value)=>this.setState({Bio:value})}
                
                  />

<TextInput 
                  style={{
                  backgroundColor:"#fff",
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  borderBottomWidth:2,
                  borderTopWidth:2,
                  borderColor:"#fff",
                  borderRadius:6,
                  height: 40,
                  textAlign:"center",
                  marginTop:15,
                  marginLeft:15,
                  marginRight:15,
                  marginBottom:4,
                  padding:10,
                  color:"#000",
                  fontSize:15,
                  textDecorationLine:"none"

          
                }}
                placeholder="Experence"
                //textContentType="password"
               // secureTextEntry={true}
                name={"Experence"}
               onChangeText={(value)=>this.setState({Experence:value})}
                
                  />


                <TouchableOpacity
                style={{
                  backgroundColor:"green",
                  padding:10,
                  width:70,
                  marginLeft:38+"%",
                  marginTop:5,
                  borderRadius:7
                }}
                onPress={this.sendUserInfo.bind(this)}
                >
                  <Text
                  style={{
                    textAlign:"center",
                    color:"#fff",
                    fontWeight:"bold",
                    fontSize:12
                  }}
                  >SignUp</Text> 
                  </TouchableOpacity>
               </View>
          </View>
 )}


};

export default RegCoach;
  