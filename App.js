import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PokemonStats from './screens/PokemonStats';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="PokemonStats" component={PokemonStats} options={{title: 'Pokemon Stats'}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
