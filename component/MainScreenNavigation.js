import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import Notification from './NotificationScreen';
import DoctorListScreen from './DoctorList';
import DoctorProfileScreen from './DoctorProfile';

const Stack = createNativeStackNavigator();

const MainScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainScreen'>
     <Stack.Screen name="MainScreen" component={MainScreen} />
     <Stack.Screen name="NotificationScreen" component={Notification} />
     <Stack.Screen name="DoctorListScreen" component={DoctorListScreen} />
     <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} />
    </Stack.Navigator>

  );
};

export default MainScreenNavigation;
