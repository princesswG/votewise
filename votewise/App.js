// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text} from 'react-native';
// import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
function HomeScreen(){
  return(
      <>
      <View>
          <Text>this is the home screen</Text>
      </View>
      </>
  )
}
export default function App() {
  return (
   
  <NavigationContainer>
    <Tab.Screen name='Home' component={HomeScreen} />
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
