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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PresidentDetails from './screens/PresidentDetails';
import SenatorDetails from './screens/SenatorDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    
    <Tab.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home': 'home';
            }
            else if (route.name === 'Presidents') {
              iconName = focused ? 'users' : 'users';
            }
            else if (route.name === 'Representatives') {
              iconName = focused ? 'users' : 'users';
            }
            else if (route.name === 'Senators') {
              iconName = focused ? 'users' : 'users';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#c0032c',
          tabBarInactiveTintColor: '#002368',
        })}
      >

    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Presidents' component={PresidentScreen}/>
    <Tab.Screen name='Representatives' component={RepresentativeScreen}/>
    {/* <Tab.Screen name='Senators' component={SenatorScreen}/> */}
    </Tab.Navigator>
  );
};



const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name='Default'
      component={Tabs}
      options={{ headerShown: false}}
      />
            <Stack.Screen
        name="PresidentsDetails"
        component={PresidentDetails}
        options={{ title: "Presidential Aspirant Details" }}
      />

      <Stack.Screen
        name="SenatorsDetails"
        component={SenatorDetails}
        options={{ title: "Senators Aspirant Details" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
 

