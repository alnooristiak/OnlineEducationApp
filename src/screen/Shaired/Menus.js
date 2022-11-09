import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menus = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.menuBtn}>
      {/* <TouchableOpacity 
      onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
      onPress={() => navigation.navigate("About")}>
        <Image style={styles.menuIcon} source={{uri:"https://img.icons8.com/bubbles/50/000000/info.png"}} />
        {/* <Text style={styles.menuTextN}>About</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Course")}>
        <Image style={styles.menuIcon} source={{uri:"https://img.icons8.com/bubbles/50/null/training.png"}} />
        {/* <Text style={styles.menuTextN}>Course</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}>
        <Image style={styles.menuIcon} source={{uri:"https://img.icons8.com/bubbles/50/000000/contacts.png"}} />
        {/* <Text style={styles.menuTextN}>Contact</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("UserDetail")}>
        <Image style={styles.menuIcon} source={{uri:"https://img.icons8.com/bubbles/50/null/key-fob-battery-low.png"}} />
        {/* <Text style={styles.menuTextN}>UserDetail</Text> */}
      </TouchableOpacity>
    </View>
  )
}

export default Menus

const styles = StyleSheet.create({
    menuBtn:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderColor: "#95a5a6",
    },
    menuTextN:{
        padding: 10,
        color: "#16a085",
    },
    menuIcon:{
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
})