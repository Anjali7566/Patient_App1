import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable,TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Cart= () => {
    return (
        <View  style={styles.container}>
            <View style={styles.cart}>
                <View style={styles.content}>
                    <Text style={styles.ab}>Appointment Booked</Text>
                     <Text style={styles.name}>Dr. Avneet Kaur</Text>
                    <View style={styles.td}>
                        <Text style={styles.date}>27-08-2024 </Text><Text style={styles.time}>11:00 AM to 12:00 PM</Text>
                </View>
                </View>
                  <View style={styles.verticalLine} />
                <Pressable style={styles.btn}>
                    <Text style={styles.view}>View</Text>
                </Pressable>
            </View>
            <View style={styles.cart}>
                <View style={styles.content}>
                    <Text style={styles.ab}>Appointment Booked</Text>
                     <Text style={styles.name}>Dr. Avneet Kaur</Text>
                    <View style={styles.td}>
                        <Text style={styles.date}>27-08-2024 </Text><Text style={styles.time}>11:00 AM to 12:00 PM</Text>
                </View>
                </View>
                  <View style={styles.verticalLine} />
                <Pressable style={styles.btn}>
                    <Text style={styles.view}>View</Text>
                </Pressable>
            </View>
            <View style={styles.cart}>
                <View style={styles.content}>
                    <Text style={styles.ab}>Appointment Booked</Text>
                     <Text style={styles.name}>Dr. Avneet Kaur</Text>
                    <View style={styles.td}>
                        <Text style={styles.date}>27-08-2024 </Text><Text style={styles.time}>11:00 AM to 12:00 PM</Text>
                </View>
                </View>
                  <View style={styles.verticalLine} />
                <Pressable style={styles.btn}>
                    <Text style={styles.view}>View</Text>
                </Pressable>
            </View>
            <View style={styles.cart}>
                <View style={styles.content}>
                    <Text style={styles.ab}>Appointment Booked</Text>
                     <Text style={styles.name}>Dr. Avneet Kaur</Text>
                    <View style={styles.td}>
                        <Text style={styles.date}>27-08-2024 </Text><Text style={styles.time}>11:00 AM to 12:00 PM</Text>
                </View>
                </View>
                  <View style={styles.verticalLine} />
                <Pressable style={styles.btn}>
                    <Text style={styles.view}>View</Text>
                </Pressable>
            </View>
            <View style={styles.cart}>
                <View style={styles.content}>
                    <Text style={styles.ab}>Appointment Booked</Text>
                     <Text style={styles.name}>Dr. Avneet Kaur</Text>
                    <View style={styles.td}>
                        <Text style={styles.date}>27-08-2024 </Text><Text style={styles.time}>11:00 AM to 12:00 PM</Text>
                </View>
                </View>
                  <View style={styles.verticalLine} />
                <Pressable style={styles.btn}>
                    <Text style={styles.view}>View</Text>
                </Pressable>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:80,
        alignItems:'center',
    },
    verticalLine: {
    width: 2, 
    height: '110%',
        backgroundColor: 'black', 
    marginLeft:30,
  },
     cart: {
        backgroundColor: '#E6E6E6',
        width: '90%',
        height: 80,
         flexDirection: 'row',
        marginBottom:10,
        padding: 10,
      borderRadius:10,
    },
    btn: {
          height: 30,
        width: 40,
        backgroundColor: '#267DFE',
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 15,
        padding:3,
     alignItems:'center',
    },
    view: {
        color: 'white',
        fontWeight:'bold',
    },
    ab: {
        color: '#267DFE',
        fontWeight: 'bold',
      fontSize:17,
    },
    name: {
      fontSize:17,    
    },
    content: {
        marginLeft:30,
    },
    td: {
        flexDirection: 'row',
    },
    date: {
        marginRight: 10,
         fontSize:12,
    },
    time: {
         fontSize:12,
    }
   
});
export default Cart;