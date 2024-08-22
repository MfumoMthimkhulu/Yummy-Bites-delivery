import { TouchableOpacity, TextInput, View, SafeAreaView, Text, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import UserContext from '../Usercontext';

export default function Addressdetails({ navigation }) {
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = () => {
    updateUser({ address, city, state, zipcode });
    navigation.navigate('Payment Details');
  };

  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(user.state);
  const [zipcode, setZipcode] = useState(user.zipcode);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Address Details</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Address" 
          value={address} 
          onChangeText={setAddress} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="City" 
          value={city} 
          onChangeText={setCity} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="State" 
          value={state} 
          onChangeText={setState} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Zip Code" 
          value={zipcode} 
          onChangeText={setZipcode} 
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
    padding: 16,
    alignContent: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
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
