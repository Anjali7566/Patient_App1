//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Login= ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [secureText, setSecureText] = useState(true);

 const handleSignIn = ({navigation}) => {
    // You can add your authentication logic here
    if (email === '' || password === '') {
      Alert.alert('Please enter your email and password.');
    } else {
      // Placeholder for sign-in logic
      Alert.alert('Sign In Successful', `Welcome back, ${email}!`);
    }
  };
  const ForgotPassword = () => {
    Alert("forget password");
  }

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };
return (
  <View style={styles.container}>
    <Image
            style={styles.loginlogo}
        source={require('../assets/login.png')}

    />
      <Text style={styles.title}>LOGIN</Text>
    <View style={styles.input1}>
      <Text style={styles.label}>Email</Text>
      <MaterialIcons name="email" size={24} color="black"/>
      <TextInput
      style={styles.inp1}
        placeholder="@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
    />
      </View>
    <View style={styles.input2}>
       <MaterialIcons name="lock-open" size={24} color="black"/>
      <TextInput
          style={styles.inp2}
         placeholder="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialIcons
            name={secureText ? 'visibility-off' : 'visibility'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    <TouchableOpacity onPress={ForgotPassword}>
        <Text style={styles.forgotPasswordText} onPress={() =>
        navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
      </TouchableOpacity>
    <Pressable style={styles.bttn} onPress={handleSignIn}>
      <Text style={styles.btext} onPress={() =>
        navigation.navigate('AppointmentSlip')}>LOGIN</Text>
    </Pressable>
    <Text style={styles.or}>OR</Text>
    <Text style={styles.lw}>Login with</Text>
    <TouchableOpacity>
       <Image
            style={styles.logo}
        source={require('../assets/google_logo.png')}

    />
   </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.account}>Don't have an account? <Text style={styles.Registernow} onPress={() =>
        navigation.navigate('Register')}>Register now</Text> 
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 24,
  },
  input2: {
    height: 50,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#0A8E8A',
  },
  inp2: {
    flex: 1,
    height: 40,
  },
  inp1:{
    flex: 1,
    height: 40,
  },
  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  label: {
    position: 'absolute',
    top: -10, // Position the label inside the border
    left: 10,
    backgroundColor: '#f5f5f5', // Match the background color to your container
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'gray',
  },
  loginlogo: {
    width:'100%',
    height: 200,
    marginTop:20,
  },
  logo: {
    marginLeft:150,
    width: 40,
    height: 40,
    marginTop:20,
  },
  bttn: {
    width: '50%',
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 16,
    marginLeft:80,
    borderRadius: 100,
    paddingTop:10,
  },
  btext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginTop:20,
  },
  lw: {
    textAlign: 'center',
    marginTop:20,
  },
   forgotPasswordText: {
    color: '#007BFF',
    marginLeft:200,
     marginTop: 20,
    marginBottom:10,
  },
   Registernow: {
     color: '#007BFF',
  },
  account: {
    marginTop: 20,
    textAlign:'center',
   }
});

export default Login;
