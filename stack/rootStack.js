


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Shop from '../screens/shopScreen';
import Product from '../screens/singleProductScreen';


const RootStack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator>
         <RootStack.Screen name="product" component={Product}/>
         <RootStack.Screen name="shop" component={Shop}/>
    </RootStack.Navigator>
);