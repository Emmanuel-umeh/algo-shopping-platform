


import React from 'react';
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';


const Authstack = createStackNavigator();



const Authstack = ({navigation}) => (
    <Authstack.Navigator>
    
         <Authstack.Screen name="login" component={Login}/>
        




    </Authstack.Navigator>
);


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null)(AuthenticatedStack);
  