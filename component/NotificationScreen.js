import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const notifications = [
  { id: '1', name: 'Mr. Sharma', message: 'Mr. Sharma wants to fix an appointment with you.', time: '5 min ago', image: require('../assets/Ellipse 8.png') },
  { id: '2', name: 'Mr. Sharma', message: 'Mr. Sharma wants to fix an appointment with you.', time: '5 min ago', image: require('../assets/Ellipse 8.png') },
  { id: '3', name: 'Mr. Sharma', message: 'Mr. Sharma wants to fix an appointment with you.', time: '5 min ago', image: require('../assets/Ellipse 8.png') },
  { id: '4', name: 'Mr. Sharma', message: 'Mr. Sharma wants to fix an appointment with you.', time: '6 min ago', image: require('../assets/Ellipse 8.png') },
];

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationWrapper}>
            <View style={styles.notificationDot} />
            <View style={styles.notificationContainer}>
              <Image source={item.image} style={styles.notificationImage} />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>{item.message}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  notificationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#000',
    marginRight: 10,
  },
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A8E8A',
    borderRadius: 10,
    padding: 15,
  },
  notificationImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },
  notificationTime: {
    color: '#fff',
    fontSize: 12,
    marginTop:30,
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default NotificationScreen;
