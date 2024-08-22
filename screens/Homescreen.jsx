import { StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      style={styles.background}
      source={{ uri: "https://i.pinimg.com/736x/5f/46/c3/5f46c384007e719aca5f826be3bbac96.jpg" }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Yummy Bites</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Tasty meals at your fingertips delivered at your doorstep</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User Details')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  descriptionContainer: {
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
