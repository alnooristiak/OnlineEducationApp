import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menus = () => {
    const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
      style={styles.menuBtn}
      onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.menuBtn}
      onPress={() => navigation.navigate("About")}>
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.menuBtn}
      onPress={() => navigation.navigate("Course")}>
        <Text>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.menuBtn}
      onPress={() => navigation.navigate("Contact")}>
        <Text>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.menuBtn}
      onPress={() => navigation.navigate("UserDetail")}>
        <Text>UserDetail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Menus

const styles = StyleSheet.create({
    // menuBtn:{

    // }
})