import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Login from './component/signIn';
import Register from './component/signUp';
import ForgotPassword from './component/ForgotPassword';
import Verify from './component/verify';
import Verifycode from './component/verify2';
import AppointmentSlip from './component/appointmentSlip';
import Review1 from './component/review1';
import Map from './component/Map';
import Reports from './component/Reports';
import History from './component/History';
import Cart from './component/Cart';
import Profile from './component/Profile';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Care <Text style={styles.subtitle}>will Be Help You.</Text></Text>
      <Text style={styles.description}>Communication Between Patients And Medical professional</Text>
      <View style={styles.bttn}>
        <Text style={styles.btext}>Get Started</Text>
        <Pressable style={styles.bttn1} onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;
