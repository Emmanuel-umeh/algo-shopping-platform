import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
export default connect(mapStateToProps, {})(App);
