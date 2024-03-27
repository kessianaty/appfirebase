import { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import Firebase from '../../firebase';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  const auth = getAuth();

  function login() {
    signInWithEmailAndPassword(auth, email, senha).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      setUser(user);
    });

  }, []);

  if (user) {
    alert('Bem-Vindo' + user.uid);
    return navigation.navigate('Home');
  } else {
    //jhg
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acesso ao Diário</Text>
      <TextInput
        style={styles.TextoInput}
        placeholder="Digite o Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        style={styles.TextoInput}
        placeholder="Digite o Senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          login();
        }}
      >
        <Text style={styles.botaotexto}>Logar</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 25, flexDirection: "row", alignItems: "center", alignSelf: "center"}}>Não possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{fontWeight: 'bold', color: '#0000CD', fontSize: 15}}>Cadastro</Text>
      </TouchableOpacity>
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
    TextoInput:{
        width:300,
        backgroundColor: '#00BFFF',
        color: '#000',
        fontSize: 25,
        marginTop: 20,
        borderRadius:10
    },
    titulo:{
        fontSize:40
    },
    botao:{
        width:250,
        backgroundColor: '#000080',
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius:150,
        color: '#fff',
    },
    botaotexto:{
        color:'#fff',
        fontSize:30
    }
  });

