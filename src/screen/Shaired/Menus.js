import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        <Text style={styles.menuTextN}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Course")}>
        <Text style={styles.menuTextN}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.menuTextN}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate("UserDetail")}>
        <Text style={styles.menuTextN}>UserDetail</Text>
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
})