//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Verify= ({navigation}) => {
return (
  <View style={styles.container}>
    <Image
            style={styles.forgotimg}
        source={require('../assets/verify.png')}

    />
    <Text style={styles.title}>VERIFY YOUR EMAIL</Text>
        <Text style={styles.description}>Please Enter The 4 Digit Code Sent To</Text>
        <Text style={styles.demail}>traptipatel23@gmail.com</Text>
        <View style={styles.box}>
            <View style={styles.input1}>
              <Text>1</Text>
           </View>
            <View style={styles.input1}>
              <Text>2</Text>
        </View>
            <View style={styles.input1}>
               <Text>3</Text>
        </View>
            <View style={styles.input1}>
                <Text>4</Text>
        </View>
    </View>
        <Text style={styles.time}>00.00</Text>
        <Text style={styles.rcode}>Resend Code</Text>
       <Pressable style={styles.bttn}>
      <Text style={styles.btext}>VERIFY</Text>
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
    box: {
      
  },
  inp1:{
    flex: 1,
    height: 40,
  },
  input1: {
      height: 50,
      width: '20%',
      backgroundColor: '#FEA726',
      borderRadius: 5,
      borderColor:'#FF3D00',
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

export default Verify;
