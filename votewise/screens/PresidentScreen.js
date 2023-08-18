import React from 'react';
import {View, Text, SafeAreaView, FlatList, StatusBar} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

const Data = [
    {
        name: "EDWARD W. APPLETON, JR",
        id: "1",
        party: "Grassroots Development Movement",
        imageUrl: require('../../assets/images/presidentsImg/edward-appleton.jpg')
    },
    {
        name: "JOSEPH N. BOKAI",
        id: "2",
        party: "Unity Party",
        imageUrl: require('../../assets/images/presidentsImg/joseph-bokai.jpg')
    },
    {
        name: "ALLEN R. BROWN, JR",
        id: "3",
        party: "Liberia Restoration Party",
        imageUrl: require('../../assets/images/presidentsImg/allen-brown.jpg')
    },
    
    
    {   name: "ALEXANDER B. CUMMINGS",
        id: "4",
        party: "Collaborating Political Party",
        imageUrl: require('../../assets/images/presidentsImg/alex-cummings.jpg')
    },
    {   name: "SIMEON C. M FREEMAN",
        id: "6",
        party: "Movement For Progressive Change",
        imageUrl: require('../../assets/images/presidentsImg/')
    },
    {   name: "tIAWAN SAYE GONGLOE",
        id: "7",
        party: "Liberian's People's Party",
        imageUrl: require("")
    },
    {   name: "LUSINEE F. KAMARA, SR",
    id: "8",
    party: "All Liberia Coalition Party",
    imageUrl: require("")
 },
 {   name: "DAVID G. B. KIAMU",
 id: "9",
 party: "Democratic People's Party of Liberia",
 imageUrl: require("")
},
{   name: "ALEXANDER N. KOLLIE",
id: "10",
party: "Reformers National Congress",
imageUrl: require("")
},
{   name: "SHEIKH A. KOUYATEH",
id: "11",
party: "Liberia First Movement",
imageUrl: require("")
},
{   name: "BENDU ALEHMA KROMAH",
id: "12",
party: "Independent Candidate",
imageUrl: require("")
},
{   name: "RICHARD SAYE HILLER",
id: "13",
party: "Liberians For Prosperity",
imageUrl: require("")
},
{   name: "CLARENCE K. MONIBA",
id: "14",
party: "Liberian National Union",
imageUrl: require("")
},
{   name: "ROBERT FRANZ MORRIS",
id: "15",
party: "Independent Candidate",
imageUrl: require("")
},
{   name: "SARA BEYSOLOW NYANTI",
id: "16",
party: "African Liberation League",
imageUrl: require("")
},
{   name: "WILLIAM WIAH TUIDER",
id: "17",
party: "Democratic National Allegiance",
imageUrl: require("")
},
{   name: "JOSHUA TOM TURNER",
id: "18",
party: "New Liberia Party(NLP)",
imageUrl: require("")
},
{   name: "GEORGE MANNEH WEAH",
id: "10",
party: "All Liberia Coalition Party",
imageUrl: require("")
},
 {   name: "JEREMIAH Z. WHAPOE",
    id: "20",
    party: "Vision for Liberia Transformation",
    imageUrl: require("")
 },
 {   name: "LUTHER N. YORFEE",
    id: "20",
    party: "Liberia Rebuiling Party",
    imageUrl: require("")
 },

]

const Item = ({name, party, image}) =>(
    <View style={StyleSheet.list}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.name}  source={name}/>
        <Text style={styles.party} source={party}/>
</View>
)


function PresidentScreen(){
    return(
       <SafeAreaView style={styles.container}>
        <FlatList data={Data} renderItem={({item}) => <Item image={item.image} 
        name={item.name} party={item.party} /> } keyExtractor={item => item.id}/>
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
            shadewColor: '#002368'
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
        }
    })
     
export default PresidentScreen;