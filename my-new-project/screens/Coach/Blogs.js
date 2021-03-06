import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import {Header} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextField } from 'react-native-material-textfield';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards' 

 class Blogs extends React.Component {
   constructor(){
     super()
     this.state={
       Name:"",
       Bio:"",
      Experence:"",
      Email:"",
      AllTheData:[],
      reversed:[],
      Content:"",
      Title:"",
      TheNewTitle:"Title",
      TheNewContent:"Content"
     } 
   }

  static navigationOptions = {
    title:"Back",
    headerStyle:{
      backgroundColor:"#238aff",
     display:"none"
    },
    headerTitleStyle:{
      color:"#fff",
    flex: 1,
    display:"none"
    }
  }
  componentDidMount(){
    this.getUsers();
    this.TakeAndSendData();
  }
  getUsers(){
    AsyncStorage.getItem('Name')
     .then((value)=>{
      this.setState({Name:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})
     AsyncStorage.getItem('Bio')
     .then((value)=>{
      this.setState({Bio:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Experence')
     .then((value)=>{
      this.setState({Experence:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

     AsyncStorage.getItem('Email')
     .then((value)=>{
      this.setState({Email:value})
       console.log("This is the value ",value)
      })
     .then((res)=>{})

  }

  TakeAndSendData(){


    setTimeout(() => {
      fetch('https://quiet-beyond-30221.herokuapp.com/SeeAllBlogs', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    
    console.log("The Array : ", this.state.AllTheData)
    this.setState({ AllTheData : res})
    const rever = this.state.AllTheData.reverse()
    this.setState({reversed:rever}) 
    console.log("This is the Rever Page ",rever)
  })
  //.catch((err)=>console.warn(err))
  .done()
    }, 10000);
  }

  AddBlog(){

    fetch('https://quiet-beyond-30221.herokuapp.com/AddBlog', {
    method: 'post',
    headers: {
    Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state)
    })
  .then((res)=>{return res.json()}) 
  .then((res)=>{
    this.setState({AllTheData:[...this.state.AllTheData,res]})
    const rever = this.state.AllTheData.reverse();
    this.setState({reversed:rever})
   console.log("This is the Data ",res)
  })
  //.catch((err)=>console.warn(err))
  .done()

  

  }

  check(){
    
    if(this.state.Content.length >= 99){Alert.alert(
      'Err',
      'You Reach The Max of charerctors',
      [
        ,
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
         // style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );}else if(this.state.Title.length >= 30){
        Alert.alert(
        'Err',
        'You Reach The Max of charerctors',
        [
          ,
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
           // style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );

    }
    
  }


  scrollKeyBoard(){
    this.scrollKeyBoard.props.scrollToFocusedInput(reactNode)
  }
    render() {
      return (
      <KeyboardAvoidingView
      style={{
      flex:1
  
      }}
keyboardVerticalOffset={ Header.HEIGHT + 120}
behavior = "padding"
//behavior="padding"
>
        <ScrollView
        style={{
            flex: 1,
           // flexDirection:"column",
        }}>
        <View style={{
        backgroundColor:"#16A085",
        padding:5,
        margin:5,
        borderRadius:9,
       // justifyContent:"flex-end"
      }}>
      <Text
      style={{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
      }}
      >New Tip</Text>
      <View style={{
        //flexDirection:"row",
        flex:1,
        
      }}>
      {/* <Text name={"Email"}></Text>  */}
      <TextField 
      name={"Title"}
      maxLength={60}
      onChangeText={(value)=>{
        this.setState({Title:value})
        this.setState({TheNewTitle:value})
      }}

     // placeholder="Title" 
      
     // Title = "Name"
      label="The Title"
      baseColor = "#fff"
      tintColor="#000"
      multiline={true}
      maxLength={60}
      fontSize={14}
      labelFontSize={17}
      //Trailing icon
      animationDuration={350}
      editable={ true }
      lineWidth={ 2 }
     // suffix="You Need To Put a Number"
     // title="The Max Number Of Characters"
     //  error="You Need To complete"
      characterRestriction={55}
      />
       
      <TextField
      name={"Content"}
      maxLength={100}
      onChangeText={(value)=>{
      this.setState({Content:value})
      this.setState({TheNewContent:value})
      //this.check()
    }}

      
        // Title = "Name"
      label="The Content"
      baseColor = "#fff"
      tintColor="#000"
      multiline={false}
      maxLength={245}
      fontSize={14}
      labelFontSize={17}
      //Trailing icon
      animationDuration={350}
      editable={ true }
      lineWidth={ 2 }
     // suffix="You Need To Put a Number"
     // title="The Max Number Of Characters"
     //  error="You Need To complete"
      characterRestriction={240}

      />
      </View>
  
<Card
style={{
  
}}
>
  {/* <CardImage 
    // source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  /> */}
  <CardTitle 
    title={this.state.TheNewTitle} 
    subtitle={this.state.Email}
   />
  <CardContent text={this.state.TheNewContent} />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {
        this.AddBlog();
      }}
      title="Add New Tip"
      color="blue"
    />
    {/* <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    /> */}
  </CardAction>
</Card>
      </View>
 {this.state.reversed.map((Blog)=>{
            return(
    
                
                <View 
                key={Blog.id+1}
                style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                
        

  <Card
  style={{
    width:85+"%",
    backgroundColor:"#FBFCFC",
    margin:5,
    borderRadius:9

  }}
  >
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    avatarSource={{uri : 'http://placehold.it/480x270'}}
    title={Blog.TheCreater}
  />
  <CardTitle 
    title={Blog.Title} 
    subtitle={Blog.Email}
   />
  <CardContent text={Blog.content} />
  <CardAction 
    separator={true} 
    inColumn={false}
    
    > 
    <CardButton
      onPress={() => {}}
      title="Profile"
      color="blue"
    />
    {/* <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    /> */}
    </CardAction>
   </Card>

 </View>
        
                  
    
    
    
            )
         })}  
         </ScrollView>
    </KeyboardAvoidingView>
 )}


};

export default Blogs;