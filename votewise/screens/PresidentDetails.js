import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PresidentScreen from './PresidentScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="President Details"
          component={PresidentScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="President Details" component={PresidentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};