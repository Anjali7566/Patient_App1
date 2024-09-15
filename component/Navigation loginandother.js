import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginNavigation from './LoginNavigation';
import BottomNavigationBar from './BottomNavigation';

const Stack = createNativeStackNavigator();

const NavigationLoginandother = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LoginNavigation'>
     <Stack.Screen name="LoginNavigation" component={LoginNavigation} />
     <Stack.Screen name="BottomNavigationBar" component={BottomNavigationBar} />
    </Stack.Navigator>

  );
};

export default NavigationLoginandother;
