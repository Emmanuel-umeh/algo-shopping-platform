


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';


const Authstack = createStackNavigator();



const Authstack = ({navigation}) => (
    <Authstack.Navigator>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <Authstack.Screen name="login" component={Login}/>
        
        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </Authstack.Navigator>
);