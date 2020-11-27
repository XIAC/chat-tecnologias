import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../componentes/Input';
import firebase from '../utils/firebase';
import 'firebase/database';
export default function Chat() {
  // envio de datos a firebase
  //recoger los datosdel mensaje 
  // firebase.database().ref('ejemplo').push({mensaje: "aqui su mensaje"});
  return (
    <>
      <View style={estilo.contenido}>
        <Text>Este es la pantalla del Chat</Text>
        <Input/>
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