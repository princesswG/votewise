import React, { useState } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity, FlatList, SafeAreaView, Image, SectionList, ScrollView} from 'react-native';
import { senators } from '../data/Senators';


const SelectCounty = () => {
    const [showArrow, setShowArrow] = useState(false);
    const [selectedCounty, setSelectedCounty] = useState('');

    // console.log("Counties", Object.keys(senators))

    const sendropdown = senators;
// console.log(sendropdown['bomi']);
    const counties = Object.keys(senators)

    const toggleDropdown = () => {
    setShowArrow(!showArrow);
    };


const selectCounty = (county) => {
    setSelectedCounty(county);
    toggleDropdown(); //close the dropdown after selecting
}
// const Item = ({}) => (
//     <View style={styles.list}>
//         <Image style={styles.photo} source={photo} />
//         <View style={styles.infoCard}>
//             <Text style={styles.aspirant}>{aspirant}</Text>
//             <Text style={styles.number}>{number}</Text>
//             <Text style={styles.type}>{type}</Text>
//             <Text style={styles.party}>{party}</Text>
//             <Text style={styles.partyAcronym}>{partyAcronym}</Text>
//             <Text style={styles.county}>{county}</Text>
//             </View>
//     </View>
// )





return (
    <SafeAreaView style={styles.container}>
          
            
    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
        <Text>{selectedCounty || 'Select a county'}</Text>
        <Text>{showArrow ? 'Close' : 'Select'}</Text>
     </TouchableOpacity>

     {showArrow && (
        <View style={styles.dropdown}>
            {counties.map((ele) => (
                <TouchableOpacity key={ele} onPress={() => selectCounty(ele)}>
                    <Text style={styles.senCountiesDrop}>{ele}</Text>
                </TouchableOpacity>
            ))}
        </View>
     )}

        <View>
            <FlatList data={sendropdown[selectedCounty]}
          renderItem={({item}) => {
          return(
             <View style={styles.senatorsCard}>
             <Image style={styles.image} source={{uri:item.photo}}/>
             <Text style={styles.title}>{item.aspirant}{'\n'}{item.number}
             {'\n'}{item.type}{'\n'}{item.party}{'\n'}{item.partyAcronym}{'\n'}{item.county}</Text>
         </View>
            
       
     
     )}}
            keyExtractor={item => item.number}
     />
        </View>
      
</SafeAreaView>
   
);
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
    },
    dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
      
    },
    dropdown: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    item: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 100 / 2,
        borderColor: '#ccc',
        elevation: 4,
        marginVertical: 10,
        marginHorizontal: 16,
        
    },
    senatorsCard: {
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row'
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 100 / 2,
        resizeMode: 'cover', //or other resizeMode
    },

});



export default SelectCounty;