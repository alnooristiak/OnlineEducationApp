import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import herobanner from '../../../assets/heroBanner.jpg';

const Home = () => {
  return (
    <View>
        <View>
            <Image style={styles.imageStyle} source={require("../../../assets/heroBanner.jpg")} />
        </View>
      <Text>This is home Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    imageStyle:{
        width: 70,
        height: 50,
    },
})