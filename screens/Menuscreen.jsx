import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useContext } from 'react';
import UserContext from '../Usercontext';

export default function Menu({ navigation }) {
  const { menu, setMenu, cart, setCart } = useContext(UserContext);

  const updateCart = (item) => {
    const itemExists = cart.find(cartItem => cartItem.id === item.id);
    if (itemExists) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Yummy Bites Menu</Text>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menu.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => updateCart(item)}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cartButton: {
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
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
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
    fontWeight: 'bold',
  },
});
