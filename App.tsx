import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>2CCPF</Text>
      <Text style={styles.text}>Marcação de consulta</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32,
  },
  container: {
    flex: 1,
    backgroundColor: '#a000a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
