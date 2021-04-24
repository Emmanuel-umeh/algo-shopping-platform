


import React from 'react';
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';


const Stack = createStackNavigator();



const Authstack = ({navigation}) => (
    <Stack.Navigator>
    
         <Stack.Screen name="login" component={Login}/>
        




    </Stack.Navigator>
);


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null)(AuthenticatedStack);
  