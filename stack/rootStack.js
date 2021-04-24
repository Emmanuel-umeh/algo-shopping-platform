import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/loginScreen";
import Shop from "../screens/shopScreen";
import Product from "../screens/singleProductScreen";
import { connect } from "react-redux";
import { Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {logout} from "../redux/actions/auth"
const Stack = createStackNavigator();

const RootStack = ({ props }) => (
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
        headerRight: () => (
          <Ionicons name="power" size={32} color="white" onPress = {()=>{
            Alert.alert("Confirm", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  props.logout()
                },
              },
            ]);
          }} />
        ),
      }}
      
    />
    <Stack.Screen name="Product" component={Product} />
  </Stack.Navigator>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, {logout})(RootStack);
