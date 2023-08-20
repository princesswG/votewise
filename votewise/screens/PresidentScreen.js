import React from "react";
import {View, Text, SafeAreaView, FlatList, StatusBar, StyleSheet, Image} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';

const Data = [
    {
        name: "EDWARD W. APPLETON, JR",
        id: 1,
        party: "Grassroots Development Movement",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {
        name: "JOSEPH N. BOKAI",
        id: 2,
        party: "Unity Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {
        name: "ALLEN R. BROWN, JR",
        id: 3,
        party: "Liberia Restoration Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "ALEXANDER B. CUMMINGS",
        id: 4,
        party: "Collaborating Political Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "SIMEON C. M FREEMAN",
        id: 5,
        party: "Movement For Progressive Change",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "TIAWAN SAYE GONGLOE",
        id: 6,
        party: "Liberian's People's Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "LUSINEE F. KAMARA, SR",
        id: 7,
        party: "All Liberia Coalition Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "DAVID G. B. KIAMU",
        id: 8,
        party: "Democratic People's Party of Liberia",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "ALEXANDER N. KOLLIE",
        id: 9,
        party: "Reformers National Congress",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "SHEIKH A. KOUYATEH",
        id: 10,
        party: "Liberia First Movement",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "BENDU ALEHMA KROMAH",
        id: 11,
        party: "Independent Candidate",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "RICHARD SAYE HILLER",
        id: 12,
        party: "Liberians For Prosperity",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "CLARENCE K. MONIBA",
        id: 13,
        party: "Liberian National Union",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "ROBERT FRANZ MORRIS",
        id: 14,
        party: "Independent Candidate",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "SARA BEYSOLOW NYANTI",
        id: 15,
        party: "African Liberation League",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "WILLIAM WIAH TUIDER",
        id: 16,
        party: "Democratic National Allegiance",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "JOSHUA TOM TURNER",
        id: 17,
        party: "New Liberia Party(NLP)",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "GEORGE MANNEH WEAH",
        id: 18,
        party: "Coalition for Democratic Change",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "JEREMIAH Z. WHAPOE",
        id: 19,
        party: "Vision for Liberia Transformation",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "LUTHER N. YORFEE",
        id: 20,
        party: "Liberia Rebuiling Party",
        imageUrl: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg')
    }

]

const Item = ({name, party, image}) =>(
    <View style={styles.list}>
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.party}>{party}</Text>
</View>
)


function PresidentScreen(){
    return(
       <SafeAreaView style={styles.container}>
        <FlatList data={Data} renderItem={({item}) => <Item image={item.image} name={item.name} party={item.party} /> } keyExtractor={item => item.id}
        />
      </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
        container: {
            marginTop: StatusBar.currentHeight || 0, 
        },
        list: {
            backgroundColor: '#002368',
            borderColor:'#CCCC',
            padding: 20,
            marginVertical: 10,
            marginHorizontal: 16,
            borderRadius: 8,
            shadowColor: '#002368'
        },
         name: {
            fontSize: 20,
            color: 'white',
         },
         party: {
            fontSize: 15,
            color: '#c0032c'    
        },
        image: {
            width: 60,
            height: 60,
            borderRadius: 60,
            resizeMode: 'cover', //or other resizeMode
        },
    });
     
export default PresidentScreen;