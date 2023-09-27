import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; 
import Routemap from './Routemap';
import FinalOutput from './FinalOutput';

const Stack = createStackNavigator();

const App = () => {
  const [activity, setActivity] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  const getRandomActivity = () => {
    const activities = [
      'Skydiving',
      'Bungee jumping',
      'Rock climbing',
      'White-water rafting',
      'Base jumping',
      'Ice climbing',
      'Volcano boarding',
      'Shark cage diving',
      
    ];

    const randomIndex = Math.floor(Math.random() * activities.length);

    // Add a fade-in animation for the activity text
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();

    setActivity(activities[randomIndex]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Routemap" component={Routemap} />
        <Stack.Screen name="FinalOutput" component={FinalOutput} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function HomeScreen() {
    const navigation = useNavigation();

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Extreme Activity Suggestion</Text>
        <Text style={styles.description}>
          Press the button to get an extreme activity suggestion!
        </Text>
        <TouchableOpacity style={styles.button} onPress={getRandomActivity}>
          <Text style={styles.buttonText}>Get Activity</Text>
        </TouchableOpacity>
        {activity !== '' && (
          <Animated.Text
            style={[styles.activityText, { opacity: fadeAnim }]}
          >
            Your extreme activity suggestion: {activity}
          </Animated.Text>
        )}
        {activity !== '' && (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('Routemap', { activity })}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  nextButtonText: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
