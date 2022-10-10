import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PokemonDetails from './screens/PokemonDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} options={{title: 'Pokemon Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
