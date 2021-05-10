import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/loginScreen";
import Shop from "../screens/shopScreen";
import Product from "../screens/singleProductScreen";
import { connect } from "react-redux";
import { Alert } from "react-native";
import Profile from "../screens/profileScreen";

const Stack = createStackNavigator();

const RootStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "crimson",
      },
    }}
  >
    <Stack.Screen
      name="Shop"
      component={Shop}
      options={{
        title: "Latest products",
        headerTitleStyle: {
          color: "white",
          alignSelf: "center",
        },
        // headerRight: () => (
     
        // ),
      }}
      
    />
    <Stack.Screen 
     options={{
      title: "Product",
      headerTitleStyle: {
        color: "white",
      },
      // headerRight: () => (
   
      // ),
    }} name="Product" component={Product} />
    <Stack.Screen 
     options={{
      title: "profile",
      headerTitleStyle: {
        color: "white",
        alignSelf: "center",
      },
      // headerRight: () => (
   
      // ),
    }} name="Profile" component={Profile} />
  </Stack.Navigator>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, null)(RootStack);
