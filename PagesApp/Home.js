import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [diario, setDiario] = useState([]);

  // Função para deletar um documento do Firestore
  async function deleteDiario(id) {
    try {
      await deleteDoc(doc(firestore, "diario", id));
      Alert.alert("O registro foi deletado com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar documento:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'diario'), (querySnapshot) => {
      const lista = [];
      querySnapshot.forEach((doc) => {
        lista.push({ ...doc.data(), id: doc.id });
      });
      setDiario(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}>Lista de Dias</Text>
      </View>

      <FlatList
        data={diario}
        renderItem={({ item }) => {
          return (
            <View style={estilo.diario}>

              <TouchableOpacity onPress={() => navigation.navigate('AlterarDiario') 
              }>
                <View style={estilo.itens}>
                  <Text style={estilo.titulobanda}> Título<Text style={estilo.textobanda}>{item.titulo}
                  </Text></Text>
                  <Text style={estilo.titulobanda}> texto: <Text style={estilo.textobanda}>{item.genero}
                  </Text> </Text>
                  <Text style={estilo.titulobanda}> data: <Text style={estilo.textobanda}>{item.musica}
                  </Text></Text>
                  <Text style={estilo.titulobanda}> local: <Text style={estilo.textobanda}>{item.musica}
                  </Text></Text>
                </View>
              </TouchableOpacity>

              <View style={estilo.botaodeletar}>
                <TouchableOpacity onPress={() => { deleteDiario(item.id) }}>
                  <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
                </TouchableOpacity>
              </View>

            </View>
          );
        }}
      />
     <TouchableOpacity style={estilo.addbutton} onPress={() => navigation.navigate('CadDiario')}>
  <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
</TouchableOpacity>
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    marginTop: 50,
    fontSize: 30
  },
  itens: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
  },
  titulobanda: {
    fontSize: 13,
    collor: '#fff',
  },
  textobanda: {
    fontSize: 15,
    fontWeight: "bold",
  },
  musicas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#0000CD',
    borderRadius: 10
  },
  botaodeletar: {
    textAlignVertical: 'center',
    marginVertical: 10
  },
  addbutton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    position: 'absolute',
    left: 20,
    bottom: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
