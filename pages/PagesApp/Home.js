import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, FiatList, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';
import {MaterialommunityIcons} from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function Home({navigation}) {

  const [diario, setDiario] = useState([]);

  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();
    Alert.alert("A diario foi deletada");
  }

  useEffect(()=>{
    Firebase.collection("diario").onSnapshot((query)=>{
      const lista=[];
      query.forEach((doc)=>{
        lista.push({...doc.data(),id: doc.id});
      });
      setDiario(lista);
    });
  },[]);
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
  