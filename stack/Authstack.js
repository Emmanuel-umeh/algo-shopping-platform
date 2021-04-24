


import React from 'react';
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';


const Authstack = createStackNavigator();



const Authstack = ({navigation}) => (
    <Authstack.Navigator>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <Authstack.Screen name="login" component={Login}/>
        
        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </Authstack.Navigator>
);


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, { loadUser })(AuthenticatedStack);
  