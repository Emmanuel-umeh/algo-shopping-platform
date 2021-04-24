


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const Authstack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <Authstack.Navigator   screenOptions={{
        headerShown: false
      }}>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <RootStack.Screen name="getStarted" component={getStarted}/>
        
        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </RootStack.Navigator>
);