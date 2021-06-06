import React from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/loginScreen";
import Recover from "../screens/recoverAccount";

const Stack = createStackNavigator();

const Authstack = ({ navigation }) => (
  <Stack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: "crimson",
    },
  }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      options={{
        title: "Recover Account",
        headerTitleStyle: {
          color: "white",
        }
      }}
      name="Recover"
      component={Recover}
    />
  </Stack.Navigator>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, null)(Authstack);
