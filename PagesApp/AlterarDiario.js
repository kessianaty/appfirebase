import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';
import { firestore } from '../../firebase';

export default function AlterarDiario({ navigation, route }) { // Receba `route` como uma propriedade
  const { id, titulo: initialTitulo, texto: initialTexto, data: initialData, local: initialLocal } = route.params; // Desestruture `route` para obter os parâmetros

  const [titulo, setTitulo] = useState(initialTitulo);
  const [texto, setTexto] = useState(initialTexto);
  const [data, setData] = useState(initialData);
  const [local, setLocal] = useState(initialLocal);

  function alterarDiario(id, titulo, texto, data, local) {
    Firebase.collection("diario").doc(id).update({
      titulo: titulo,
      texto: texto,
      data: data,
      local: local,
    });
    Alert.alert("Aviso", "Diário alterado com sucesso.");
    navigation.navigate("Home");
  }

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Alterar dados do Diário </Text>
      </View>
      <View>
        <TextInput
          autoCapitalize='words'
          style={estilo.input}
          placeholder="Digite o título"
          onChangeText={setTitulo}
          value={titulo}
        />
        <TextInput
          style={estilo.input}
          placeholder='Digite o texto'
          onChangeText={setTexto}
          value={texto}
        />
        <TextInput
          style={estilo.input}
          placeholder='Digite a data'
          onChangeText={setData}
          value={data}
        />
        <TextInput
          style={estilo.input}
          placeholder='Digite o local'
          onChangeText={setLocal}
          value={local}
        />
        <TouchableOpacity
          style={estilo.btnenviar}
          onPress={() => {
            alterarDiario(id, titulo, texto, data, local);
          }}>
          <Text style={estilo.btntxtenviar}> Alterar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#9ac234',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 20,
  },
  btntxtenviar: {
    fontSize: 25,
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
  },
});
