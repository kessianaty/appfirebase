import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Meu Diário</Text>
      <Text>Data: 11/03/2024</Text>
      <Text>Palavra: Do Senhor Jesus Cristo.</Text>
      <Text>Amai aos Códigos como a si mesmo.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  