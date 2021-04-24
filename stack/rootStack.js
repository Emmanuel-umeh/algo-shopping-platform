


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Shop from '../screens/shopScreen';
import Product from '../screens/singleProductScreen';
import { connect } from 'react-redux';

const Stack = createStackNavigator();



const RootStack = ({navigation}) => (
    <Stack.Navigator screenOptions ={{
        headerStyle :{
            backgroundColor : "pink"
        }
    }}>
         <Stack.Screen name="Shop" component={Shop} options={{

title : "Latest products"
         }}/>
         <Stack.Screen name="Product" component={Product}/>
        
    </Stack.Navigator>
);

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null)(RootStack);
  