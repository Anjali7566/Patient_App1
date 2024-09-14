import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const doctors = [
  {
    id: '1',
    name: 'Dr. Avneet Kaur',
    specialization: 'Pediatrician',
    rating: '4.8 (350 reviews)',
    distance: '26.5 Km',
    fees: '500',
    availability: 'Appointment slot Available',
    image: require('../assets/Ellipse 8.png'),
  },

  {
    id: '2',
    name: 'Dr. Avneet Kaur',
    specialization: 'Pediatrician',
    rating: '4.8 (350 reviews)',
    distance: '26.5 Km',
    fees: '500',
    availability: 'Appointment slot Available',
    image: require('../assets/Ellipse 9.png'),
  },
  {
    id: '3',
    name: 'Dr. Avneet Kaur',
    specialization: 'Pediatrician',
    rating: '4.8 (350 reviews)',
    distance: '26.5 Km',
    fees: '500',
    availability: 'Appointment slot Available',
    image: require('../assets/Ellipse 8.png'),
  },
  {
    id: '4',
    name: 'Dr. Avneet Kaur',
    specialization: 'Pediatrician',
    rating: '4.8 (350 reviews)',
    distance: '26.5 Km',
    fees: '500',
    availability: 'Appointment slot Available',
    image: require('../assets/Ellipse 10.png'),
  },
];

const DoctorListScreen = ({ navigation }) => {

  const handleProfilePress = (doctor) => {
    navigation.navigate('DoctorProfileScreen', { doctor });
  };

  const handleBookAppointmentPress = (doctor) => {
    navigation.navigate('BookingScreen', { doctor });
  };

  const renderDoctor = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.image}>
      <TouchableOpacity onPress={() => handleProfilePress(item)}>
        <Image source={item.image} style={styles.profileImage} />
      </TouchableOpacity>
      <View style={styles.feescontainer}>
        <Text style={styles.feesText}>Fees - {item.fees}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.specialization}>{item.specialization}</Text>
        <View style={styles.ratingLocationContainer}>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={18} color="#0A8E8A" />
            <Text style={styles.locationText}>{item.distance}</Text>
          </View>
        </View>
        <Text style={styles.availabilityText}>{item.availability}</Text>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => handleBookAppointmentPress(item)}
        >
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dotContainer}>
        <View style={styles.dot} />
      </View>
    </View>
  );

  const renderSpecialist = ({ item }) => (
    <View style={styles.specialistItem}>
      <Image source={item.image} style={styles.specialistImage} />
      <Text style={styles.specialistText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <View style={styles.header}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text style={styles.headerTitle}>Our Doctors</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
        />
        <MaterialIcons name="search" size={26} color="#0A8E8A" style={styles.searchicon} />
      </View>
      <FlatList
        data={doctors}
        renderItem={renderDoctor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.specialistContainer}>
        <Text style={styles.specialistTitle}>Specialist</Text>
        <FlatList
          data={doctors}
          renderItem={renderSpecialist}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
  header:{
  flexDirection:'row',
  gap:10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth:1,
    borderColor:'#0A8E8A',
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: '#999',
    fontSize: 16,
  },
  searchicon:{
   marginLeft:215,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialization: {
    color: '#4C97F3',
    marginTop: 5,
    fontSize: 14,
  },
  ratingLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#444',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#444',
  },
  feescontainer:{
    padding:2,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  feesText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  availabilityText: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
  },
  bookButton: {
    marginTop: 10,
    backgroundColor: '#0A8E8A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  specialistContainer:{
   marginBottom:70,
  },
  specialistTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specialistItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  specialistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  specialistText: {
    fontSize: 12,
    color: '#444',
  },
  dotContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
});

export default DoctorListScreen;
