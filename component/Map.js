import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Image, Pressable, TextInput,
    Platform,
    PermissionsAndroid,
    Alert,
    ActivityIndicator,
    Button
 } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Map = () => {
    return (
        <View style={styles.container}>
            <Text>trapti patel</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
});
export default Map;