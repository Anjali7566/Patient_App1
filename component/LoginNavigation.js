import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './ForgotPassword';
import Register from './signUp';
import MainScreen from './MainScreen';
import Login from './signIn';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default LoginNavigation;
