import React, { useState } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity, FlatList, SafeAreaView, Image, SectionList, ScrollView} from 'react-native';

const SelectCounty = () => {
    const [showArrow, setShowArrow] = useState(false);
const [selectedCounty, setSelectedCounty] = useState('');

const counties = [
    'Bomi', 
    'Gbarpolu', 
    'GrandBassa',
    'Grand Cape Mount',
    'Grand Kru',
    'Lofa',
    'Monsterrado',
    'Nimba',
    'River Gee',
    'Sinoe',
    'RiverCess',
    'Margibi',
    'Grand Gedeh',
    'Bong',
    'Maryland',
]; 

const toggleDropdown = () => {
    setShowArrow(!showArrow);
};

const selectCounty = (county) => {
    setSelectedCounty(county);
    toggleDropdown(); //close the dropdown after selecting
}

return (
    <View style={styles.container}>
        <ScrollView>
            
    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
        <Text>{selectedCounty || 'Select a county'}</Text>
        <Text>{showArrow ? 'Close' : 'Select'}</Text>
     </TouchableOpacity>

     {showArrow && (
        <View style={styles.dropdown}>
            {counties.map((ele) => (
                <TouchableOpacity key={ele} onPress={() => selectCounty(ele)} style={styles.item}>
                    <Text>{ele}</Text>
                </TouchableOpacity>
            ))}
        </View>
     )}

     {selectedCounty !== '' && (
        <Text>You've selected : {selectedCounty.toLowerCase()}</Text>
     )}

        </ScrollView>
   </View>
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