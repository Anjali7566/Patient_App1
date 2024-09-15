import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import Notification from './NotificationScreen';
import DoctorList from './DoctorList';
import DoctorProfileScreen from './DoctorProfile';
import AppointmentSlip from './appointmentSlip';
import History from './History';
import Profile from './Profile';
import AppointmentDateScreen from './AppointmentDateScreen';

const Stack = createNativeStackNavigator();

const MainScreenNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainScreen'>
     <Stack.Screen name="MainScreen" component={MainScreen} />
     <Stack.Screen name="NotificationScreen" component={Notification} />
     <Stack.Screen name="DoctorList" component={DoctorList} />
     <Stack.Screen name="DoctorProfileScreen" component={DoctorProfileScreen} />
     <Stack.Screen name="AppointmentSlip" component={AppointmentSlip}/>
     <Stack.Screen name="History" component={History}/>
     <Stack.Screen name="Profile" component={Profile}/>
     <Stack.Screen name="AppointmentDateScreen" component={AppointmentDateScreen}/>
    </Stack.Navigator>

  );
};

export default MainScreenNavigation;
