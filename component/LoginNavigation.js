import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './ForgotPassword';
import Register from './signUp';
import Verify from './verify';
import Login from './signIn';
import BottomNavigationBar from './BottomNavigation';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="Verify" component={Verify} />
   </Stack.Navigator>
  );
};

export default LoginNavigation;
