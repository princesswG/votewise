import React, { useState } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity, FlatList, SafeAreaView, Image, SectionList, ScrollView} from 'react-native';
import { representatives } from '../data/Representatives';

const SelectCounty = () => {
    const [showArrow, setShowArrow] = useState(false);
const [selectedCounty, setSelectedCounty] = useState('');
// const [selectedDistrict, setSelectedDistrict] = useState('');



//const counties = representatives;


const repdropdown = representatives;
const repCounties = Object.keys(representatives)

repCounties.forEach((countyKey) => {
    const districtKeys = Object.keys(representatives[countyKey])

    console.log(countyKey);
console.log(`Districts: ${districtKeys.join(", ")}`)
});


const toggleDropdown = () => {
    setShowArrow(!showArrow);
};

const selectCounty = (county) => {
    setSelectedCounty(county);
    toggleDropdown(); //close the dropdown after selecting
}

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
            <FlatList data={repdropdown[selectedCounty]}
          renderItem={({item}) => {
          return(
             <View style={styles.repCard}>
             <Image style={styles.image} source={{uri:item.photo}}/>
             <Text style={styles.title}>{item.aspirant}{'\n'}{item.number}
              {'\n'}{item.district}{'\n'}{item.type}{'\n'}{item.party}
              {'\n'}{item.partyAcronym}{'\n'}{item.county}</Text>
         </View>
            
       
      )}}
            keyExtractor={item => item.district}
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

});



export default SelectCounty;