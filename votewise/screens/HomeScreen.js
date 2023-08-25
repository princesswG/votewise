import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { images } from './GlobalImg';
import { NavigationContainer } from '@react-navigation/native';

const Data = [
    {
        title: 'Parties',
        number: '46'
    },
    // {
    //     title: 'Precints',
    //     number: '2,080',
    // },
    {
        title: 'Polling Places',
        number: '5,890',
    },
    {
        title: 'voters',
        number: '2, 471,617',
    },
]
const Item = ({title, number,icon})=>{
 return(
     <View style={styles.voterStats}>
      <Text style={styles.votersTitle}>{title}</Text>
      <Text style={styles.votersNumber}>{number}</Text>
     </View>
 )
}
function HomeScreen(){
    return(
        <View>
            <ScrollView>
                <View style={styles.hero}>
                    <Image source={images.homeImages.flag_ChairDesign}
                      style={styles.image}/>
                     <Text style={styles.title}>LIB Vote Wise</Text>
                      </View>

                <View style={styles.textView}>
                    <Text style={styles.welcomeText}>Be a part of the <Text style={styles.futureText}> Future Liberia </Text>we want and dream of. </Text>
                </View>

                <View style={styles.votersStatsView}>
                    {Data.map((item, index) => (
                        <View key={index}>
                            <Item title={item.title} icon={item.icon} number={item.number}></Item>
                            </View>
                    ))
                }
                </View>
                <View style={styles.newsView}>
                    <Text style={styles.textTitle}>Recent elections News View</Text>
                    <View>
                        <Image style={styles.newsHeadlineImage} source={images.homeImages.flag_electionBanner}/>
                        <Text style={styles.newsHeadlineText}>October 10, 2023 is Election Day </Text>
                    </View>
                </View>
            </ScrollView>
             </View>
       );
}
const styles = StyleSheet.create({
    hero: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        color: '#002368',
        fontWeight: 500,
        marginBottom: 50
    },
    image: {
        width:150,
        height: 150,
        resizeMode: 'cover' //or other image resizeMode
    
    },
    welcomeText: {
        fontSize: 40,
        color: '#002368'
    },
    textView: {
        width: 350,
        justifyContent: 'center',
        marginLeft: 35,
        marginTop: 30
    },
    futureText: {
      color: '#c0032c',
      fontWeight: '600'
    },
    //Voters Flatlist Styles
    voterStats: {
        width: '126',
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 4,
        borderRadius: 8
    },
    votersStatsView: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center'
    },
    votersTitle: {
        fontSize: 15,
        textAlign: 'center',
        color: '#002368',
        fontWeight: '800'
    },
    votersNumber: {
        fontSize: 22,
        textAlign: 'center',
        color: '#c0032c',
        fontWeight: '500'
    },
    //News view
    newsView: {
       alignItems: 'center',
       marginTop: 50
    },
    textTitle: {
        fontSize: 22
    },
    newsHeadlineImage: {
        width: 500,
        height: 400,
        resizeMode: 'cover',
        marginRight: 70
    },
    newsHeadlineText: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 80
    }
});



export default HomeScreen;