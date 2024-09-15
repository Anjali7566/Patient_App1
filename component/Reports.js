import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable,TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Reports = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resent Reports</Text>
            <View style={styles.months}>
                <Text style={styles.month}>July</Text>
                 <Icon name="filter-outline" size={30} color="#000" />
            </View>
            <View style={styles.report}>
                <Pressable style={styles.btn}>
                    
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Lab Tests</Text>
                <Text style={styles.time}>27-08-2024 12:01</Text>
                </View>
            </View>
             <View style={styles.report}>
                <Pressable style={styles.btn}>
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Lab Tests</Text>
                <Text style={styles.time}>27-08-2024 12:01</Text>
                </View>
            </View>
             <View style={styles.report}>
                <Pressable style={styles.btn}>
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Lab Tests</Text>
                <Text style={styles.time}>27-08-2024 12:01</Text>
                </View>
            </View>
             <View style={styles.report}>
                <Pressable style={styles.btn}>
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Lab Tests</Text>
                <Text style={styles.time}>27-08-2024 12:01</Text>
                </View>
            </View>
             <View style={styles.report}>
                <Pressable style={styles.btn}>
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Lab Tests</Text>
                <Text style={styles.time}>27-08-2024 12:01</Text>
                </View>
            </View>
            <View style={styles.knowmore}>
                <Text style={styles.viewm}>View More</Text>
             <View style={styles.dots}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
             </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:30,
    },
    months: {
        marginTop:20,
        marginLeft: 250,
        flexDirection:'row',
    },
    report: {
        backgroundColor: '#E6E6E6',
        width: '90%',
        height: 60,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
      borderRadius:10,
    },
    labtest: {
       marginLeft:70,
    },
    lt: {
         fontWeight: 'bold',
        fontSize:15,
    },
    btn: {
        height: 40,
        width: 40,
        backgroundColor: '#267DFE',
        borderRadius: 10,
     padding:5,
    },
    knowmore: {
        marginTop:50,
          backgroundColor: '#E6E6E6',
        width: '70%',
        height: 50,
        flexDirection: 'row',
        borderRadius: 30,
        padding:15,
    },
    viewm: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:30,
    },
    dots: {
        flexDirection: 'row',
        marginLeft: 30,
    },
    dot:{
        backgroundColor: 'black',
        height: 10,
        width: 10,
        borderRadius: 100,
        marginLeft:10,
    },
});
export default Reports;