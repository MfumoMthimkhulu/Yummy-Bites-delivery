import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { useContext } from 'react';
import UserContext from '../Usercontext';

export default function CartScreen() {
  const { cart } = useContext(UserContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      {cart.length > 0 ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {cart.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R{item.price.toFixed(2)} x {item.quantity}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.totalPrice}>Total: R{getTotalPrice()}</Text>
        </ScrollView>
      ) : (
        <Text style={styles.emptyMessage}>Your cart is empty</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#888',
  },
});
