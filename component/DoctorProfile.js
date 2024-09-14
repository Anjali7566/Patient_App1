import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const DoctorProfileScreen = ({ navigation }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCallPress = () => {
    Linking.openURL('tel:+918546652338');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:alexasharma@gmail.com');
  };

  const handleLocationPress = () => {
    // Navigate to the location screen or open the location in a map
    Alert.alert('Location Clicked', 'Navigating to location...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Profile</Text>
        <FontAwesome name="circle" size={20} color="#4CAF50" />
      </View>

      <View style={styles.profileContainer}>
        <View
          style={[
            styles.ProfileImageContainer,
            { borderWidth: isHovered ? 5 : 3 } // Adjust border width based on hover state
          ]}
        >
          <TouchableOpacity
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
          >
            <Image source={require('../assets/Ellipse 8.png')} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.doctorName}>Dr. Avneet Kaur</Text>
          <Text style={styles.specialization}>Pediatrician</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>4.8 (350 reviews)</Text>
          </View>
          <TouchableOpacity onPress={handleLocationPress} style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={18} color="black" />
            <Text style={styles.locationText}>26.5 Km</Text>
          </TouchableOpacity>
          <Text style={styles.feesText}>Fees - 500</Text>
        </View>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Details</Text>
        <TouchableOpacity style={styles.contactRow} onPress={handleCallPress}>
          <MaterialIcons name="phone" size={20} color="black" />
          <Text style={styles.contactText}>+91-8546652338</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactRow} onPress={handleEmailPress}>
          <MaterialIcons name="email" size={20} color="black" />
          <Text style={styles.contactText}>alexasharma@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactRow} onPress={handleEmailPress}>
        <MaterialIcons name="location-on" size={20} color="black" />
        <Text style={styles.contactText}>k-74, Saraswati Vihar, Ph-1, Rohini, Delhi-110085</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Doctor</Text>
        <Text style={styles.aboutText}>
        Dr.  is the top most
specialist in Cumilla Medical Collage Hospital At
Cumilla. He achived several awards foe his
wonderful confriution in his own field. He is
avaliable for privet consulatation. He achived
several awards foe his wonderful confriution in
his own field. He is avaliable for privet
consulatation.      
  </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BOOK APPOINTMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: "row",
    justifyContent:'space-around',
  },
  ProfileImageContainer: {
    marginBottom: 20,
    borderRadius: 100,
    borderColor: '#267DFE',
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  specialization: {
    color: '#4C97F3',
    marginTop: 5,
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#444',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#444',
  },
  feesText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactContainer: {
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#444',
  },
  aboutContainer: {
    marginTop: 20,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#979797',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#4C97F3',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DoctorProfileScreen;
