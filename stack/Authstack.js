


import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const RootStack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator   screenOptions={{
        headerShown: false
      }}>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
         <RootStack.Screen name="getStarted" component={getStarted}/>
        <RootStack.Screen name="phoneNumberScreen" component={PhoneNumber}/>
        <RootStack.Screen name="otp" component={Otp}/>
        <RootStack.Screen name="nameScreen" component={NameScreen}/>
        <RootStack.Screen name="TermsAndCondition" component={TermsAndCondition}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> 
   
        <RootStack.Screen headerMode ="none" name="Map" component={Map}/>
        <RootStack.Screen   name="setDestination" component={setDestination}/>

        {/* <RootStack.Screen   name="mapDestination" component={MapDestination}/> */}



    </RootStack.Navigator>
);