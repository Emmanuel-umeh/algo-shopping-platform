import React, { Component } from 'react'
import {StyleSheet} from "react-native"
import Login from "../screens/loginScreen";
import Recover from "../screens/recoverAccount";
import {MaterialIcons} from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) =>({
  tabBarIcon : ({focused}) => {
    let icon = '';
    const color = focused ? "crimson": "#828282"
    const size = 24


    switch (route.name) {
      case "Cards":
        icon = "credit-card"

        break;
      case "History":
        icon = "send"

        break;
    
      default:
        icon = "dashboard";
    }

    return <MaterialIcons name = {icon}  size = {size} color = {color}/>
  }
})


const Tabs = () => {
  return (
    <Tab.Navigator
      
    screenOptions = {screenOptions}
      tabBarOptions ={{
          showLabel : true,
          activeTintColor: colors.safron,
          // inactiveTintColor: '#fff',
        
          style : {
            backgroundColor : "#1e1e1e",
            borderTopColor : "#1e1e1e",
            paddingBottom : 5
          }
         
      }}
    >
      <Tab.Screen  name="Home" component={Account_analytics}></Tab.Screen>



      
<Tab.Screen options ={{
  title : "Profile"
}} name="Cards"component={Profile} ></Tab.Screen>



    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

shadow : {
    shadowColor : "#7F5DF0",
    shadowOffset : {
        width : 0,
        height : 10
    },
    shadowOpacity : 0.25,
    shadowRadius : 3.5,
    elevation : 5
},
container : {
    alignContent : "center",
    justifyContent : "center",
    top : 10
},
payout_button : {
    top : -30,
    justifyContent : "center",
    alignItems : "center",
    shadowColor : "#7F5DF0",
    shadowOffset : {
        width : 0,
        height : 10
    },
    shadowOpacity : 0.25,
    shadowRadius : 3.5,
    elevation : 5
},
payout_view : {
    width : 70,
    height : 70,
    borderRadius : 35,
    backgroundColor : "#e32f45"

}
})
export default Tabs;


