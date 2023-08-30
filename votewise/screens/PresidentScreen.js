import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, FlatList, StatusBar, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';


const Data = [
    {
        name: "EDWARD W. APPLETON, JR",
        id: 1,
        party: "Grassroots Development Movement",
        image: require('../../votewise/assets/images/presidentsImg/edward-appleton.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
        name: "JOSEPH N. BOKAI",
        id: 2,
        party: "Unity Party",
        image: require('../../votewise/assets/images/presidentsImg/joseph-boakai.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "ALLEN R. BROWN, JR",
        id: 3,
        party: "Liberia Restoration Party",
        image: require('../../votewise/assets/images/presidentsImg/allen-brown.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "ALEXANDER B. CUMMINGS",
        id: 4,
        party: "Collaborating Political Party",
        image: require('../../votewise/assets/images/presidentsImg/alex-cummings.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "SIMEON C. M FREEMAN",
        id: 5,
        party: "Movement For Progressive Change",
        image: require('../../votewise/assets/images/presidentsImg/simeon-freeman.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "TIAWAN SAYE GONGLOE",
        id: 6,
        party: "Liberian's People's Party",
        image: require('../../votewise/assets/images/presidentsImg/tiawan-gongloe.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "LUSINEE F. KAMARA, SR",
        id: 7,
        party: "All Liberia Coalition Party",
        image: require('../../votewise/assets/images/presidentsImg/lusinee-kamara.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "DAVID G. B. KIAMU",
        id: 8,
        party: "Democratic People's Party of Liberia",
        image: require('../../votewise/assets/images/presidentsImg/david-kiamu.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "ALEXANDER N. KOLLIE",
        id: 9,
        party: "Reformers National Congress",
        image: require('../../votewise/assets/images/presidentsImg/alexander-kollie.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "SHEIKH A. KOUYATEH",
        id: 10,
        party: "Liberia First Movement",
        image: require('../../votewise/assets/images/presidentsImg/sheikh-kouyateh.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "BENDU ALEHMA KROMAH",
        id: 11,
        party: "Independent Candidate",
        image: require('../../votewise/assets/images/presidentsImg/alehma-kromah.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "RICHARD SAYE HILLER",
        id: 12,
        party: "Liberians For Prosperity",
        image: require('../../votewise/assets/images/presidentsImg/richard-miller.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "CLARENCE K. MONIBA",
        id: 13,
        party: "Liberian National Union",
        image: require('../../votewise/assets/images/presidentsImg/clarence-moniba.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "ROBERT FRANZ MORRIS",
        id: 14,
        party: "Independent Candidate",
        image: require('../../votewise/assets/images/presidentsImg/robert-franz-morris.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "SARA BEYSOLOW NYANTI",
        id: 15,
        party: "African Liberation League",
        image: require('../../votewise/assets/images/presidentsImg/sara-nyanti.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "WILLIAM WIAH TUIDER",
        id: 16,
        party: "Democratic National Allegiance",
        image: require('../../votewise/assets/images/presidentsImg/william-tuder.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "JOSHUA TOM TURNER",
        id: 17,
        party: "New Liberia Party(NLP)",
        image: require('../../votewise/assets/images/presidentsImg/joshua-turner.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "GEORGE MANNEH WEAH",
        id: 18,
        party: "Coalition for Democratic Change",
        image: require('../../votewise/assets/images/presidentsImg/george-weah.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "JEREMIAH Z. WHAPOE",
        id: 19,
        party: "Vision for Liberia Transformation",
        image: require('../../votewise/assets/images/presidentsImg/jeremiah-whapoe.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "LUTHER N. YORFEE",
        id: 20,
        party: "Liberia Rebuiling Party",
        image: require('../../votewise/assets/images/presidentsImg/luther-yorfee.jpg'),
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

]


//console.log(Object(Data))
// const bioinfo = Object.keys(Data)

const biodropdown = Data;
// console.log(biodropdown)

const Item = ({ name, party, image, bio }) => (
    <View style={styles.list}>
        <Image style={styles.image} source={image} />
        <View style={styles.infoCard}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.party}>{party}</Text>
        </View>

    </View>
)

const pressLink =() => {

}

function PresidentScreen() {
    const navigation = useNavigation();
    const onPressCandidate = (id) => {
        console.log({id})
        navigation.navigate("Home")
    }
    return (
        
        <SafeAreaView style={styles.container}>
       <View style={styles.dropdown}>
     <FlatList
                data={Data}
                renderItem={({ item }) =>(
                    <TouchableOpacity onPress={() => onPressCandidate(item.id)}>
                        <Item image={item.image} name={item.name} party={item.party} />
                        </TouchableOpacity>
                ) 
                }
                keyExtractor={item => item.id}
                  
            />
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    list: {
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
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        color: '#002368',
        fontWeight: 50,
        marginTop: 10
    },
    party: {
        fontSize: 13,
        color: '#c0032c',
        flex: 'wrap',
        fontWeight: 50
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

export default PresidentScreen;