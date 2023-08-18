import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PresidentScreen from './screens/PresidentScreen';
import RepresentativeScreen from './screens/RepresentativeScreen';
import SenatorScreen from './screens/SenatorScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
  <NavigationContainer>
    <Tab.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >

    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Presidents' component={PresidentScreen}/>
    
    </Tab.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
