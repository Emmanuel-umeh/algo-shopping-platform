


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Shop from '../screens/shopScreen';


const RootStack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <RootStack.Screen name="shop" component={Login}/>
         <RootStack.Screen name="shop" component={Shop}/>
         <RootStack.Screen name="shop" component={}/>
        
        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </RootStack.Navigator>
);