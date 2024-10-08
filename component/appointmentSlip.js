/*import React, { useState } from 'react';
import { View, Text,StyleSheet,Image,Pressable} from 'react-native';

const AppointmentSlip = () => {
    return (
        <View style={styles.container}>
                 <Text style={styles.title}>Friday , 25th August 2023 at 11:00 AM</Text>
            <Text style={styles.line}></Text>
            <View style={styles.imgcontainer}>
              <Image
            style={styles.doctorimg}
        source={require('../assets/doctor.png')}
                />
                <View style={styles.detail}>
                <Text style={styles.dname}>Avneet Kaur</Text>
                <Text style={styles.dtype}>Pediatrician</Text>
               </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.clinic}>Avneet Kaur Clinic</Text>
                <Text style={styles.timefee}>11:00 AM To 12:00 PM </Text>
                <Text style={styles.line1}></Text>
                <Text style={styles.timefee}>Fees</Text>
            </View>
            <Text style={styles.line}></Text>
            <View style={styles.petientDetail}>
                <Text style={styles.pdetail}>Petient Details</Text>
                <Text style={styles.data}>Name</Text>
                <Text style={styles.data}>Mobile No.</Text>
                <Text style={styles.data}>Age</Text>
                <Text style={styles.data}>Description</Text>
            </View>
             <Pressable style={styles.bttn}>
      <Text style={styles.btext}>Add a Review</Text>
    </Pressable>
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
        fontSize: 24, 
    },
    line: {
    width: '90%', 
    height: 2,  
    backgroundColor: 'black',
    margin:20,
    } ,
    doctorimg: {
        height: 50,
        width: 50,
    borderWidth: 4,   
    borderColor: '#1E90FF',
    borderRadius: 100, 
    },
    imgcontainer: {
        flexDirection: 'row',
        marginRight:110,
    },
    dname: {
        fontSize: 20,
        marginLeft:20,
    },
    dtype: {
        fontSize: 15,
        color: '#1E90FF',
        marginLeft:30,
    },
    detail: {
        flexDirection:'column',
    },
    time: {
        height: 120,
        width: 300,
        backgroundColor: '#D9D9D9',
        padding: 20,
        marginTop: 20,
      borderRadius:20,
    },
    clinic: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:10, 
    },
    timefee: {
      marginLeft:10,   
    },
    line1: {
    width: '90%', 
    height: 2,  
    backgroundColor: 'black',
    margin:10,
    },
    pdetail: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 180,
    marginTop:10,
    },
    data: {
     margin:10,    
    },
     bttn: {
    width: '50%',
    backgroundColor: '#FEA726',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 100,
         paddingTop: 10,
    marginTop:50,
  },
  btext: {
    color: 'black',
    fontWeight: 'bold',
  },
})
export default AppointmentSlip;

*/
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const AppointmentSlip = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friday, 25th August 2023 at 11:00 AM</Text>
            <View style={styles.separator}></View>

            <View style={styles.imgContainer}>
                <Image
                    style={styles.doctorImg}
                    source={require('../assets/doctor.png')}
                />
                <View style={styles.details}>
                    <Text style={styles.doctorName}>Dr. Avneet Kaur</Text>
                    <Text style={styles.doctorType}>Pediatrician</Text>
                </View>
            </View>

            <View style={styles.timeContainer}>
                <Text style={styles.clinic}>Avneet Kaur Clinic</Text>
                <Text style={styles.timeText}>11:00 AM to 12:00 PM</Text>
                <View style={styles.innerSeparator}></View>
                <Text style={styles.timeText}>Fees</Text>
            </View>

            <View style={styles.separator}></View>

            <View style={styles.patientDetails}>
                <Text style={styles.sectionTitle}>Patient Details</Text>
                <Text style={styles.data}>Name: John Doe</Text>
                <Text style={styles.data}>Mobile No.: +91123456789</Text>
                <Text style={styles.data}>Age: 34</Text>
                <Text style={styles.data}>Description: General Checkup</Text>
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add a Review</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    separator: {
        width: '90%',
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20,
    },
    doctorImg: {
        height: 50,
        width: 50,
        borderWidth: 4,
        borderColor: '#1E90FF',
        borderRadius: 100,
    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    details: {
        marginLeft: 20,
    },
    doctorName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    doctorType: {
        fontSize: 15,
        color: '#1E90FF',
    },
    timeContainer: {
        backgroundColor: '#D9D9D9',
        padding: 20,
        borderRadius: 20,
        width: '90%',
        marginBottom: 20,
    },
    clinic: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    timeText: {
        fontSize: 15,
    },
    innerSeparator: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
    },
    patientDetails: {
        width: '90%',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    data: {
        fontSize: 14,
        marginBottom: 5,
    },
    button: {
        width: '50%',
        backgroundColor: '#FEA726',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 100,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default AppointmentSlip;


