import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>keya kahu ke sharamse labsehe le keha..</Text>
      <Home></Home>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 35,
  },
});
