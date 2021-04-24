


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const Authstack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <Authstack.Navigator>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <Authstack.Screen name="getStarted" component={getStarted}/>
        
        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </Authstack.Navigator>
);