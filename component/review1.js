import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable,TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Review1 = () => {
    return (
        <View style={styles.container}>
          <Image
            style={styles.docimg}
        source={require('../assets/doctor.png')}
            />
              <View style={styles.detail}>
                <Text style={styles.dname}>Avneet Kaur</Text>
                <Text style={styles.dtype}>Pediatrician</Text>
               </View>
            <View style={styles.stars}>
                <MaterialIcons name="star" size={24} color="#FFC700" style={styles.star} />
                <MaterialIcons name="star" size={24} color="#FFC700" style={styles.star}/>
                <MaterialIcons name="star" size={24} color="#FFC700" style={styles.star}/>
                <MaterialIcons name="star" size={24} color="#FFC700" style={styles.star}/>
                <MaterialIcons name="star" size={24} color="#C6C5C5" style={styles.star}/>
            </View>
            <Text style={styles.comment}>Leave a Comment</Text>
            <View style={styles.input1}>
                <MaterialIcons name="message" size={24} color="black" style={styles.cmt} />
      <TextInput
      style={styles.inp1}
        placeholder="comments...."
        autoCapitalize="none"
    />
            </View>
            <Pressable style={styles.bttn}>
      <Text style={styles.btext}>SUBMIT</Text>
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
     docimg: {
    borderWidth: 4,   
    borderColor: '#1E90FF',
    borderRadius: 100, 
    },
    stars: {
        flexDirection: 'row',  
        marginTop: 20,
        marginBottom: 50,
    },
    star: {
        margin: 5,
        fontSize:30,
    },
     dname: {
        fontSize: 20,
         marginLeft: 20,
        fontWeight:'bold',
    },
    dtype: {
        fontSize: 15,
        color: '#1E90FF',
        marginLeft:30,
    },
    detail: {
        marginTop:20,
        flexDirection:'column',
    },
    comment: {
        fontSize: 15,
        fontWeight: 'bold', 
       marginTop:15,
        marginRight:160,
    },
     inp1:{
    flex: 1,
         height: 40,
         paddingLeft: 50,
    fontWeight:'bold',
  },
  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
      paddingHorizontal: 10,
    margin:20,
    height: 50,
    borderColor: '#ccc',
    marginBottom: 80,
      borderRadius: 100,
      borderColor: 'black',
    width:'80%',
      backgroundColor: '#FEA726',
    },
   bttn: {
    width: '50%',
    backgroundColor: '#0A8E8A',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
   paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 100,
    paddingTop:10,
  },
  btext: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Review1;