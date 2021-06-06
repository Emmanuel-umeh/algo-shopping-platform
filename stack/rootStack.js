import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Shop from "../screens/shopScreen";
import Product from "../screens/singleProductScreen";
import { connect } from "react-redux";
import Profile from "../screens/profileScreen";
import Tabs from "./Tabs";

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
      component={Tabs}
      options={{
        title: "Latest Products",
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, null)(RootStack);
