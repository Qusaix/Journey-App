import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
//import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: HomeScreen,
},{ 
defaultNavigationOptions:{
headerStyle:{
  background:"red"
}
}
}
));