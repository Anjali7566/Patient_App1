//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Register= ({navigation}) => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
return (
  <View style={styles.container}>
    <Image
            style={styles.registerimg}
        source={require('../assets/register.png')}

    />
        <Text style={styles.title}>SIGNUP</Text>
         <View style={styles.mn}>
       <MaterialIcons name="phone" size={24} color="black"/>
      <TextInput
          style={styles.mninput}
         placeholder="Mobile Number"
          value={mobilenumber}
                onChangeText={setMobileNumber}
               placeholderTextColor={'white'}
        />
      </View>
    <View style={styles.email}>
       <MaterialIcons name="email" size={24} color="black"/>
      <TextInput
          style={styles.emailinput}
         placeholder="Email"
          value={email}
                onChangeText={setEmail}
                placeholderTextColor={'white'}
        />
      </View>
    <View style={styles.pass}>
       <MaterialIcons name="lock-open" size={24} color="black"/>
      <TextInput
          style={styles.passinput}
         placeholder="Password"
          value={password}
                onChangeText={setPassword}
                placeholderTextColor={'white'}
        />
        </View>
        <View style={styles.cpass}>
       <MaterialIcons name="lock-open" size={24} color="black"/>
      <TextInput
          style={styles.cpassinput}
         placeholder="Confirm Password"
          value={confirmpassword}
                onChangeText={setConfirmPassword}
                placeholderTextColor={'white'}
        />
      </View>
    <Pressable style={styles.bttn}>
      <Text style={styles.btext}>SIGNUP</Text>
    </Pressable>
    <Text style={styles.or}>OR</Text>
    <Text style={styles.lw}>Register with</Text>
    <TouchableOpacity>
       <Image
            style={styles.logo}
        source={require('../assets/google_logo.png')}

    />
   </TouchableOpacity>
    <TouchableOpacity>
        <Text style={styles.account}>If you already Registered then?<Text style={styles.Registernow}>Login here</Text></Text>
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
    marginBottom: 20,
  },
  mn: {
    height: 50,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
      backgroundColor: '#0A8E8A',
    marginBottom:8,
  },
 mninput: {
    flex: 1,
    height: 40,
    },
  email: {
    height: 50,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
      backgroundColor: '#0A8E8A',
    marginBottom:8,
  },
 emailinput: {
    flex: 1,
    height: 40,
    },
  pass: {
    height: 50,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
      backgroundColor: '#0A8E8A',
    marginBottom:8,
  },
 passinput: {
    flex: 1,
    height: 40,
    },
  cpass: {
    height: 50,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100,
      backgroundColor: '#0A8E8A',
    marginBottom:8,
  },
 cpassinput: {
    flex: 1,
     height: 40,
  },
  registerimg: {
    width:'100%',
    height: 200,
  },
  logo: {
    marginLeft:150,
    width: 40,
    height: 40,
    marginTop:10,
  },
  bttn: {
    width: '50%',
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 8,
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
    marginTop:10,
  },
  lw: {
    textAlign: 'center',
    marginTop:10,
  },
   Registernow: {
     color: '#007BFF',
    },
    account: {
    marginTop: 10,
    textAlign:'center',
   }
});

export default Register;
