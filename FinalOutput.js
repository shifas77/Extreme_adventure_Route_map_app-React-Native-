import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import suitable marker icons from the Expo vector icons library

const FinalOutput = ({ route }) => {
  const { activity, steps } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.map}>
        <View style={styles.mapHeader}>
          <Text style={styles.header}>Activity Guide</Text>
        </View>

        <View style={styles.mapContent}>
          {steps.map((step, index) => (
            <View key={index}>
              <View style={styles.stepContainer}>
                <Ionicons name="ios-location-sharp" size={24} color="#007BFF" style={styles.stepMarker} />
                <Text style={styles.stepText}>{step}</Text>
              </View>
            </View>
          ))}

          {/* The final destination is displayed at the end */}
          <View style={styles.finalDestinationContainer}>
            <Ionicons name="ios-flag" size={24} color="red" style={styles.finalDestinationMarker} />
            <Text style={styles.finalDestinationText}>{activity}</Text>
          </View>
        </View>

        {/* Interactive Button */}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  map: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    marginHorizontal: 20,
  },
  mapHeader: {
    backgroundColor: '#007BFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  mapContent: {},
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepMarker: {
    marginRight: 10,
  },
  stepText: {
    fontSize: 16,
    flex: 1,
  },
  finalDestinationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  finalDestinationMarker: {
    marginRight: 10,
  },
  finalDestinationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  orderButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default FinalOutput;
