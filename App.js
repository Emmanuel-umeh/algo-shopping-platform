import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { loadUser } from "./redux/actions/auth.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authstack from "./stack/Authstack";
import RootStack from "./stack/RootStack";
import { connect } from "react-redux";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react"
import store, { persistedStore } from "./redux/store";
function App(props) {
  return (
  
    <NavigationContainer>
      {props.auth.userAddress ? <RootStack /> :  <Authstack /> }
    </NavigationContainer>


  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error,
  order: state.order,
});

// export default ProjectForm
export default connect(mapStateToProps, { loadUser })(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
