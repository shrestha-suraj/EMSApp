import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import MielageScreen from './screens/MielageScreen'
import UseGpsScreen from './screens/UseGpsScreen'
//Go To Website, Use GPS and View Mielage

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EMS">
        <Stack.Screen name="EMS" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mielage" component={MielageScreen} />
        <Stack.Screen name="GPS Track" component={UseGpsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;