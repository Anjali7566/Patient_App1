//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const ForgotPassword= ({navigation}) => {
  const [email, setEmail] = useState('');
return (
  <View style={styles.container}>
    <Image
            style={styles.forgotimg}
        source={require('../assets/forgot.png')}

    />
    <Text style={styles.title}>FORGOT PASSWORD</Text>
    <Text style={styles.description}>Please Enter Your Registered Email To Recieve A Verification Code</Text>
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
       <Pressable style={styles.bttn}>
      <Text style={styles.btext} onPress={() =>
        navigation.navigate('Verify')}>DONE</Text>
    </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   //  flex: 1,
    //justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
     marginBottom: 25,
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
    marginBottom: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  description: {
    marginBottom: 40,
    fontWeight: 'bold',
    fontSize:15,
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
  forgotimg: {
    width:'100%',
    height: 200,
    marginBottom:20,
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
});

export default ForgotPassword;
