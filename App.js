import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './src/screen/About/About';
import Contact from './src/screen/Contact/Contact';
import Course from './src/screen/Course/Course';
import Home from './src/screen/Home/Home';
import UserDetail from './src/screen/UserDetail/UserDetail';
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home page  */}
        <Stack.Screen options={{headerShown: false,}} name="Home" component={Home} />

        {/* About page  */}
        <Stack.Screen options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "About",
          headerTitleAlign: "center",
        }}
         name="About" component={About} />

        {/* Contact us/Contact Page  */}
        <Stack.Screen options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "Contact",
          headerTitleAlign: "center",
        }}
         name="Contact" component={Contact} />

        {/* Course details Page  */}
        <Stack.Screen options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "Course",
          headerTitleAlign: "center",
        }}
         name="Course" component={Course} />

        {/* User Detail Page  */}
        <Stack.Screen options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "UserDetail",
          headerTitleAlign: "center",
        }}
         name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // padding: 10,
//     marginTop: 40,
//   },
// });
