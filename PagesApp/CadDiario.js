import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';

export default function CadDiario({ navigation }) {

  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');

  function addDiario() {
    Firebase.collection('diario').add({
      titulo: titulo,
      texto: texto,
      data: data,
      local: local,
    })
      .then(() => {
        setTitulo('');
        setTexto('');
        setData('');
        setLocal('');
        Alert.alert("Cadastro", "Entrada do diário cadastrada com sucesso");
        navigation.navigate("Home");
      })
      .catch(error => {
        console.error("Erro ao cadastrar entrada no diário: ", error);
        Alert.alert("Erro", "Erro ao cadastrar entrada no diário. Por favor, tente novamente.");
      });
  }

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Faça registros no {'\n'} Diário aqui </Text>
      </View>
      <View>
        <TextInput
          autoCapitalize='words'
          style={estilo.input}
          placeholder="Digite o título da entrada"
          onChangeText={setTitulo}
          value={titulo}
        />
        <TextInput
          style={estilo.input}
          placeholder='Digite o conteúdo'
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
          onPress={addDiario}>
          <Text style={estilo.btntxtenviar}> Enviar </Text>
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
