import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import Userdetails from './screens/Userdetails';
import Addressdetails from './screens/Addressdetails';
import Paymentdetails from './screens/Paymentdetails';
import Menu from './screens/Menuscreen';
import Cart from './screens/Cartscreen';
import Profile from './screens/Profilescreen';
import Contextmenu from './context';
import { UserProvider } from './Usercontext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <Contextmenu>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="User Details" component={Userdetails} />
            <Stack.Screen name="Address Details" component={Addressdetails} />
            <Stack.Screen name="Payment Details" component={Paymentdetails} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Cart" component={Cart} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </Contextmenu>
    </UserProvider>

  );
}

