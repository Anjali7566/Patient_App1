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
import Verify1 from './component/verify1';
import Verify2 from './component/verify2';
import Verify3 from './component/verify3';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Care <Text style={styles.subtitle}>will Be Help You.</Text></Text>
      <Text style={styles.description}>Communication Between Patients And Medical professional</Text>
      <View style={styles.bttn}>
        <Text style={styles.btext}>Get Started</Text>
        <Pressable style={styles.bttn1} onPress={() => navigation.navigate('Login')}>
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
        <Stack.Screen name="AppointmentSlip" component={AppointmentSlip} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Verifycode" component={Verifycode} />
        <Stack.Screen name="Review1" component={Review1} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="VerifyCode" component={Verify1} />
        <Stack.Screen name="VerifySuccess" component={Verify2} />
         <Stack.Screen name="VerifySuccessCode" component={Verify3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bttn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#1E90FF',
    borderWidth: 1,
    height: 50,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 16,
    marginLeft:20,
    borderRadius: 100,
    paddingLeft: 20,
  },
  title: {
    color: '#1E90FF',
    fontSize:30,
  },
  subtitle: {
    color: 'black',
    fontSize:30,
  },
  description: {
    marginTop:30,
    marginBottom:70,
  },
  bttn1: {
    backgroundColor: '#0A8E8A',
    width: '40%',
    paddingLeft: 40,
    height: 40,
    paddingTop:5,
    borderRadius:100,
  },
  btext: {
    fontSize: 18,
    marginRight: 60,
    color:'#FFFFFF',
  },

});
