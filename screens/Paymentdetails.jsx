import { TouchableOpacity, TextInput, View, SafeAreaView, Text, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import UserContext from '../Usercontext';

export default function Paymentdetails({ navigation }) {
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = () => {
    updateUser({ cardNumber, expirationDate, cvv });
    navigation.navigate("Profile");
  };

  const [cardNumber, setCardNumber] = useState(user.cardNumber);
  const [expirationDate, setExpirationDate] = useState(user.expirationDate);
  const [cvv, setCvv] = useState(user.cvv);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Expiration Date"
          value={expirationDate}
          onChangeText={setExpirationDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    fontSize: 16,
  },
});
