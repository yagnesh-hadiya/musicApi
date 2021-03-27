import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from './src/screen/categoryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={CategoryScreen} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;