import React, { Component, useState } from "react";
import { StyleSheet } from "react-native";
import { Container } from 'native-base';
import Login from "./src/pantallas/Login";
import Chat from "./src/pantallas/Chat";

export default function App(){
  const [nombreUsuario, setNombreUsuario] = useState(null);
  return(
    <Container style= {estilo.contenedor}>
        { !nombreUsuario ? (<Login setNombreUsuario={setNombreUsuario}/>) : (<Chat/>)}
    </Container>
  );
}
const estilo = StyleSheet.create({
  contenedor:{
    backgroundColor:"#263238"
  }
})