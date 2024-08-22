import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import UserContext from '../Usercontext';

export default function Profile({navigation}) {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <Text style={styles.infoText}>Name: {user.name}</Text>
        <Text style={styles.infoText}>Phone: {user.phone}</Text>
        <Text style={styles.infoText}>Email: {user.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Address</Text>
        <Text style={styles.infoText}>Address: {user.address}</Text>
        <Text style={styles.infoText}>City: {user.city}</Text>
        <Text style={styles.infoText}>State: {user.state}</Text>
        <Text style={styles.infoText}>Zip Code: {user.zipcode}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Card</Text>
        <Text style={styles.infoText}>Card Number: {user.cardNumber}</Text>
        <Text style={styles.infoText}>Expiration Date: {user.expirationDate}</Text>
        <Text style={styles.infoText}>CVV: {user.cvv}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => (navigation.navigate("Menu"))}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
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
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
