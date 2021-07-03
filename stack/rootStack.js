import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "../screens/singleProductScreen";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

const RootStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "crimson"
      }
    }}
  >
    <Stack.Screen
      name="Shop"
      component={Tabs}
      options={{
        title: "Home",
        headerTitleStyle: {
          color: "white",
          alignSelf: "center",
        },
      }}
    />
    <Stack.Screen
      options={{
        title: "Product",
        headerTitleStyle: {
          color: "white",
        },
      }}
      name="Product"
      component={Product}
    />
    
  </Stack.Navigator>
);

export default RootStack
