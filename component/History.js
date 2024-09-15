import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable,TextInput ,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const History = ({navigation}) => {
    return (
        <View style={styles.container1}>
          <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
      </View>
      <View style={styles.container}>
            <Text style={styles.title}>Past History</Text>
            <View style={styles.months}>
                <Text style={styles.month}>July</Text>
                 <Icon name="filter-outline" size={30} color="#000" />
            </View>
            <View style={styles.report}>
                <Pressable style={styles.btn}>
                    
                    <MaterialIcons name="arrow-back" size={24} color="black" style={styles.cmt} />
                </Pressable>
                <View style={styles.labtest}>
                <Text style={styles.lt}>Doctor Appointment</Text>
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
                <Text style={styles.lt}>Doctor Appointment</Text>
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
                <Text style={styles.lt}>Doctor Appointment</Text>
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
        </View>
    )
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        gap:20,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
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
export default History;