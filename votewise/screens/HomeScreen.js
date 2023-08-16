import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


function HomeScreen({navigation}){
    return(
        <>
        <View style={styles.container}>
            <Text>this is the home screen</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center'
  }
})
export default HomeScreen;