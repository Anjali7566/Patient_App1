import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, ScrollView, Dimensions,Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Help= () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  const handleLocationPinPress = () => {
    setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(true);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.doctor}>
          <Image source={require('../assets/Ellipse 7.png')} style={styles.doctorImage} />
          <TouchableOpacity onPress={handleLocationPinPress}>
            <Image source={require('../assets/Location.png')} style={styles.location} />
          </TouchableOpacity>
        </View>
        <View style={styles.wish}>
          <Text style={styles.greeting}>Good Morning...</Text>
          <Text style={styles.username}>LAKSHAY</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon} onPress={() => navigateTo('NotificationScreen')}>
          <MaterialIcons name="notifications" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity style={styles.modalContent} onPress={closeModal}>
            <TextInput
              style={styles.searchBarModal}
              placeholder="Enter Mobile No"
              placeholderTextColor="#000"
            />
             <Button title="Request to call" onPress={() => { }} style={styles.btn} />
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search......"
          placeholderTextColor="#fff"
        />
        <MaterialIcons name="search" size={26} color="#fff" style={styles.searchIcon} />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.doctorButton} onPress={() =>navigateTo('DoctorList')}>
          <Text style={styles.buttonText} >Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.labsButton} onPress={() => navigateTo('Labs')}>
          <Text style={styles.buttonText}>Labs</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/Rectangle 4246.png')} style={styles.image} />
        <View style={styles.circlesContainer}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.circle} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Doctors</Text>
        <View style={styles.doctorList}>
          {['Dr. Mukesh Singh', 'Dr. Mukesh Singh', 'Dr. Mukesh Singh', 'Dr. Mukesh Singh'].map((name, index) => (
            <View key={index} style={styles.doctor}>
              <Image source={require('../assets/Ellipse 8.png')} style={styles.doctorImage} />
              <Text style={styles.doctorName}>{name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specialist</Text>
        <View style={styles.specialistList}>
          {['Neurologist', 'Urologist', 'Pediatrician', 'Radiologist', 'Surgeon'].map((specialist, index) => (
            <View key={index} style={styles.specialist} onTouchEnd={() => navigateTo('SpecialistProfile')}>
              <Image source={require('../assets/Ellipse 8.png')} style={styles.specialistImage} />
              <Text style={styles.specialistName}>{specialist}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginBottom:50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C97F3',
    paddingTop: 40,
    paddingLeft: 20,
  },
  wish: {
    marginLeft: 20,
    marginBottom: 40,
  },
  greeting: {
    color: 'white',
    fontSize: 18,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  notificationIcon: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#4C97F3',
    paddingBottom: 50,
  },
  searchInput: {
    flex: 1,
    width: "80%",
    backgroundColor: '#0A8E8A',
    padding: 10,
    marginLeft: 50,
    borderRadius: 20,
    position: "absolute",
  },
  searchIcon: {
    marginTop: 40,
    marginLeft: 300,
  },
  location: {
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  doctorButton: {
    backgroundColor: '#4C97F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  labsButton: {
    backgroundColor: '#2B797B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  doctorList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  doctor: {
    alignItems: 'center',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  doctorName: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
  },
  specialistList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  specialist: {
    alignItems: 'center',
  },
  specialistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  specialistName: {
    textAlign: 'center',
    fontSize: 9,
    fontWeight: 'bold',
  },
  modalBackground: {
    backgroundColor: '#3C3C43CC',
    width: '100%',
    height: 680,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: 150,
    marginTop: 400,
    marginBottom:20,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBarModal: {
    flex: 1,
    padding: 10,
    width: 250,
    marginBottom:20,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    textAlign:'center',
  },
  
});

export default Help;
