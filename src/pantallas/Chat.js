import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../componentes/Input';
import firebase from '../utils/firebase';
import 'firebase/database';
export default function Chat() {
  const enviarMensaje = (mensaje) =>{
    console.log("chat",mensaje);
    firebase
      .database().ref('general').push({
        nombreUsuario: 'NULL',
        text: mensaje,
        time: "NULL"
      });
  }
  return (
    <>
      <View style={estilo.contenido}>
        <Text>Chat</Text>
        <Input enviarMensaje={enviarMensaje}/>    
      </View>
    </>

  );
}
const estilo = StyleSheet.create({
  contenido:{
    flex:1,
    justifyContent: 'space-between'
  }
})