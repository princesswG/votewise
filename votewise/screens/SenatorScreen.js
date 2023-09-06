import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Touchable, TouchableOpacity, FlatList, SafeAreaView, Image, SectionList, ScrollView } from 'react-native';
import { senators } from '../data/Senators';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SelectCounty = () => {
    const [showArrow, setShowArrow] = useState(false);
    const [selectedCounty, setSelectedCounty] = useState("Montserrado");

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

    const navigation = useNavigation();

    const senatorPress = (item) => {
      navigation.navigate("SenatorsDetails", {
        item,
      });
    };

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.container}>


                    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
                        <Text>{selectedCounty || 'Select a county'}</Text>
                        <Text style={styles.hamburgerIcon}>{showArrow ? "▲" : "▼"}</Text>
                    </TouchableOpacity>

                    {showArrow && (
                        <View style={styles.dropdown}>
                            {counties.map((ele) => (
                                <TouchableOpacity key={ele} onPress={() => selectCounty(ele)}>
                                    <Text style={styles.dropdowncounties}>{ele}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    <FlatList data={sendropdown[selectedCounty]}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => senatorPress(item)}>
                                    <View style={styles.senatorsCard}>
                                    <Image style={styles.image} source={{ uri: item.photo }} />
                                    {/* <View style={styles.infoCard}> */}
                                    <Text style={styles.title}>{item.aspirant}{'\n'}{item.party}
                                        {/* {'\n'}{item.number} {'\n'}{item.type}{'\n'}{item.partyAcronym}{'\n'}{item.county} */}
                                    </Text>
                                </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.number}
                    />


                </SafeAreaView>
            </ScrollView>
        </View>


    );
                    }

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        marginTop: StatusBar.currentHeight || 0,
        marginTop: 10
    },
    dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        fontSize: 30,

    },
    dropdown: {
        marginTop: 10,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        fontSize: 20
    },
    dropdowncounties: {
        marginTop: 10,
        borderWidth: 3,
        shadowColor: 'white',
        borderColor: 'blue',
        // shadowOffset: {width:0, height: 2},
        // shadowRadius: 4,
        // shadowOpacity: 0.26,
        // elevation: 4,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        fontSize: 20
    },
    item: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 100 / 4,
        borderColor: '#ccc',
        elevation: 4,
        marginVertical: 10,
        marginHorizontal: 16,

    },
    senatorsCard: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 8,
        flexDirection: 'row',


    },


    image: {
        width: 85,
        height: 85,
        borderRadius: 100 / 2,
        resizeMode: 'cover', //or other resizeMode
    },
    infoCard: {
        flexDirection: 'column',
        marginLeft: 18
    }

});



export default SelectCounty;