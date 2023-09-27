import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Routemap = ({ route }) => {
  const { activity } = route.params;

  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState('');

  const navigation = useNavigation();

  const addStep = () => {
    if (currentStep.trim() !== '') {
      setSteps([...steps, currentStep]);
      setCurrentStep('');
    }
  };

  const done = () => {
    navigation.navigate('FinalOutput', { activity, steps });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{activity}</Text>
      <Text style={styles.subHeader}>Steps to Achieve:</Text>
      {steps.map((step, index) => (
        <Text key={index} style={styles.step}>
          {index + 1}. {step}
        </Text>
      ))}
      <TextInput
        placeholder="Add a step..."
        value={currentStep}
        onChangeText={(text) => setCurrentStep(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={addStep} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Step</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={done} style={styles.doneButton}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  step: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Routemap;
