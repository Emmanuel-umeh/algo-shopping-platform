import { StatusBar } from "expo-status-bar";
import React from "react";
import { loadUser } from "./redux/actions/auth.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authstack from "./stack/Authstack";
import RootStack from "./stack/RootStack";
import { connect } from "react-redux";
function App(props) {
  return (
    <NavigationContainer>
      {props.auth.userAddress ? <RootStack /> : <Authstack />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, { loadUser })(App);
