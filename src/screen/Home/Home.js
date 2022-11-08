import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import herobanner from '../../../assets/heroBanner.jpg';

const Home = () => {
  return (
    <View style={styles.mainWrapper}>
        <View>
            <Image style={styles.imageStyle} source={require("../../../assets/heroBanner.jpg")} />
        </View>
        <View style={styles.heroTextSec}>
            <Text style={styles.heroFirstText}>Welcome to</Text>
            <Text style={styles.heroSirstText}>Online Diploma Education</Text>
        </View>
        <View style={styles.heroParaTextSec}>
            <Text style={styles.heroParaText}>
                Lorem ipsum dolor sit amet consec tetur adipis icing elit. Dolo rum a quas perspi ciatis quis quam et delec tus quaerat minus.
            </Text>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    // main wrapper section 
    mainWrapper:{
        padding: 15,
    },

    // hero section image css 
    imageStyle:{
        width: "100%",
        // marginLeft: 10,
        // marginRight: 10,
        borderRadius: 10,
        aspectRatio: 1,
        height: undefined,
    },

    // hero section text css 
    heroTextSec:{
        marginTop: 15,
    },
    heroFirstText:{
        textAlign: "center",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
    },
    heroSirstText:{
        // marginTop: ,
        textTransform: 'uppercase',
        textAlign: "center",
        // fontWeight: 'bold',
        fontSize: 25,
        color: '#01a3a4',
    },
    heroParaTextSec:{
        marginTop: 15,
    },
    heroParaText:{
        color: '#8395a7',
        fontSize: 17,
        textAlign: 'justify',
    },

})