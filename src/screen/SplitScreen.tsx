import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const SplitScreen = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [splitAmount, setSplitAmount] = React.useState<string | undefined>();;
  const [animation] = useState(new Animated.Value(1));

  const calculateSplit = () => {
    const total = parseFloat(totalAmount);
    const people = parseInt(numberOfPeople);

    if (!isNaN(total) && !isNaN(people) && people > 0) {
      const split = total / people;
      setSplitAmount(split.toFixed(2));
      animate();
    }
  };

  const animate = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // Reset animation value after completion
      animation.setValue(0);
    });
  };

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
    opacity: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Split Bill Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Amount:</Text>
        <TextInput
          style={styles.input}
          value={totalAmount}
          onChangeText={setTotalAmount}
          keyboardType="numeric"
          placeholder="Enter total amount"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of People:</Text>
        <TextInput
          style={styles.input}
          value={numberOfPeople}
          onChangeText={setNumberOfPeople}
          keyboardType="numeric"
          placeholder="Enter number of people"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateSplit}>
        <Text style={styles.buttonText}>Calculate Split</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.resultContainer, animatedStyle]}>
        <Text style={styles.resultText}>Each person pays:</Text>
        <Text style={styles.amount}>${splitAmount}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SplitScreen;