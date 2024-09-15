import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable,TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Profile= () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                 <Image
            style={styles.docimg}
        source={require('../assets/petient.png')}
                />
                <Text style={styles.name} >Elvish Yadav</Text>
            </View>
            <View style={styles.Pinfo}>
                <Text style={styles.title1}>Personal Info</Text>
                <View style={styles.yourdata}>
                    <MaterialIcons name="person-outline" size={24} color="black" style={styles.icondata} />
                    <Text style={styles.data}>Your Profile</Text>
                </View>
                <View style={styles.yourdata}>
                    <MaterialIcons name="history" size={24} color="black" style={styles.icondata} />
                    <Text style={styles.data} onPress={()=>navigation.navigate("History")}>History</Text>
                </View>
            </View>
            <Text style={styles.line}></Text>
             <View style={styles.Pinfo}>
                <Text style={styles.title2}>General</Text>
                <View style={styles.yourdata}>
                    <MaterialIcons name="notifications-none" size={24} color="black" style={styles.icondata} />
                    <Text style={styles.data} onPress={()=>navigation.navigate("NotificationScreen")}>Notification</Text>
                </View>
                <View style={styles.yourdata}>
                    <MaterialIcons name="language" size={24} color="black" style={styles.icondata} />
                    <Text style={styles.data}>Languages</Text>
                </View>
                <View style={styles.yourdata}>
                    <MaterialIcons name="help-outline" size={24} color="black" style={styles.icondata} />
                    <Text style={styles.data}>Help and Support</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    line: {
      width: '100%', 
    height: 1,  
    backgroundColor: 'black',
    margin:10,   
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop:5,
    },
    title1: {
        marginRight: 230,
        marginBottom: 20,
         fontSize:15,
    },
    title2: {
        marginTop:20,
        marginRight: 250,
        marginBottom: 20,
         fontSize:15,
    },
    yourdata: {
        margin: 10,
        flexDirection: 'row', 
    },
    icondata: {
    marginRight:10,
    },
});
export default Profile;