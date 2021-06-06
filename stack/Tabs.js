import React, { Component } from 'react'
import {StyleSheet} from "react-native"
import Shop from "../screens/shopScreen";
import Product from "../screens/singleProductScreen";
import Profile from "../screens/profileScreen";
import {MaterialIcons} from "@expo/vector-icons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
          activeTintColor: "crimson",
          // inactiveTintColor: '#fff',
        
          style : {
            backgroundColor : "#fff",
            borderTopColor : "grey",
            paddingBottom : 5
          }
         
      }}
    >
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{
        title: "Latest Products",
        headerTitleStyle: {
          color: "white",
          alignSelf: "center",
        },
      }}
    />
    {/* <Stack.Screen
      options={{
        title: "Product",
        headerTitleStyle: {
          color: "white",
        },
      }}
      name="Product"
      component={Product}
    /> */}
    <Tab.Screen
      options={{
        title: "My Profile",
        headerTitleStyle: {
          color: "white",
        },
      }}
      name="Profile"
      component={Profile}
    />


    </Tab.Navigator>
  );
};


export default Tabs;


