import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { images } from './GlobalImg';
//import { NavigationContainer } from '@react-navigation/native';


function HomeScreen(){
    return(
       
        <View style={styles.container}>
         <Image source={images.homeImages.flag_ChairDesign} style={styles.image}/>
         <Text style={styles.title}>LIB Vote Wise</Text>
        </View>
       );
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 35,
        color: '#002368',
        fontWeight: 30,
    },
    image: {
        width:200,
        height: 200,
        resizeMode: 'cover', //or other image resizeMode
    
    }
})



export default HomeScreen;