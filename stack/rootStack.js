


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Shop from '../screens/shopScreen';
import Product from '../screens/singleProductScreen';
import { connect } from 'react-redux';

const Stack = createStackNavigator();



const RootStack = ({navigation}) => (
    <Stack.Navigator>
         <Stack.Screen name="product" component={Product}/>
         <Stack.Screen name="shop" component={Shop}/>
    </Stack.Navigator>
);

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null)(RootStack);
  